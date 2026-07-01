import { fetchCurrentConditions } from "../api/current.js";
import { fetchHistoricalWeather } from "../api/history.js";
import { getHourFromISO, shiftDays, toDateStr } from "../utils/date.js";
import { getState, setState } from "../app/store.js";
import { toChunks } from "../utils/objects.js";
import {
  computeStats,
  sigmaToFrequency,
  sigmaToLabel,
  sigmaToPercentile,
  sigmaToSeverity,
  toSigma,
} from "./calculation.js";
import { getSettings, DEFAULT_SETTINGS } from "../app/settings.js";
import { LOCATION, CONDITIONS, HISTORICAL, APPSTATE } from "../types.js";

export async function runAnalysis() {
  try {
    const state = getState();
    const settings = getSettings();
    const location = state.selectedLocation;

    if (!location) throw new Error("Please select a location first!");

    setState({
      status: "loading",
      location,
      error: null,
      analysis: null,
    });

    /**
     * @type {{
     *   conditions: typeof CONDITIONS,
     *   readings: typeof CONDITIONS[]
     * }}
     */
    let data = {
      conditions: null,
      readings: null,
    };

    switch (state.mode) {
      case "current":
        data = await runAnalysisCurrent(state, settings, location);
        break;
      case "past":
        data = await runAnalysisPast(state, settings, location);
        break;
      case "manual":
        data = await runAnalysisManual(state, settings, location);
        break;
      default:
        throw new Error("Unknown mode: " + mode);
    }

    const { conditions, readings } = data;
    if (!conditions) throw new Error("Failed to fetch conditions");
    if (!readings) throw new Error("Failed to fetch readings");

    // prettier-ignore
    const stats = {
      temperature: computeStats(readings.map((r) => r.temperature)),
      apparentTemperature: computeStats(readings.map((r) => r.apparentTemperature).filter(Boolean)),
      humidity: computeStats(readings.map((r) => r.humidity).filter(Boolean)),
      windSpeed: computeStats(readings.map((r) => r.windSpeed).filter(Boolean)),
      precipitation: computeStats(readings.map((r) => r.precipitation).filter(Boolean)),
      cloudCover: computeStats(readings.map((r) => r.cloudCover).filter(Boolean)),
    };

    const useApparentTemp =
      conditions.apparentTemperature !== undefined &&
      stats.apparentTemperature.count > settings.minReadings;

    const tempStats = useApparentTemp
      ? stats.apparentTemperature
      : stats.temperature;

    const sigma = toSigma(
      useApparentTemp ? conditions.apparentTemperature : conditions.temperature,
      tempStats.mean,
      tempStats.std,
    );

    setState({
      status: "success",
      location: location,
      analysis: {
        datetime: conditions.datetime,
        timezone: location.timezone,
        location,
        sigma,
        percentile: sigmaToPercentile(sigma),
        frequency: sigmaToFrequency(sigma),
        severity: sigmaToSeverity(sigma),
        label: sigmaToLabel(sigma),
        sampleSize: tempStats.count,
        basedOn: useApparentTemp ? "feels" : "raw",
        observed: conditions,
        historical: stats,
        settings: settings,
      },
      error: null,
    });
  } catch (err) {
    setState({
      status: "error",
      error: err.message,
    });
    console.error(err);
  }
}

/**
 * @param {typeof APPSTATE} state
 * @param {typeof DEFAULT_SETTINGS} settings
 * @returns {{
 *   conditions: typeof CONDITIONS,
 *   readings: typeof CONDITIONS[]
 * }}
 */
async function runAnalysisCurrent(state, settings, location) {
  const conditions = await fetchCurrentConditions(
    location.latitude,
    location.longitude,
  );

  const historicalReadings = await fetchHistoricalWindow(
    location.latitude,
    location.longitude,
    conditions.datetime,
    settings,
  );

  const targetHour = getHourFromISO(conditions.datetime);
  const windowedReadings = historicalReadings.filter((r) => {
    const hour = getHourFromISO(r.datetime);
    return Math.abs(hour - targetHour) <= settings.windowHours;
  });
  if (windowedReadings.length < settings.minReadings) {
    setState({
      status: "error",
      error: "Not enough historical data for this location and time of day.",
    });
    return;
  }

  return {
    conditions,
    readings: windowedReadings,
  };
}

/**
 * @param {typeof APPSTATE} state
 * @param {typeof DEFAULT_SETTINGS} settings
 * @returns {{
 *   conditions: typeof CONDITIONS,
 *   readings: typeof CONDITIONS[]
 * }}
 */
async function runAnalysisPast(state, settings, location) {
  // conditions = await fetchPastConditions(
  //   state.options.past.date,
  //   state.options.past.comparison,
  //   location.latitude,
  //   location.longitude,
  // );
  throw new Error("Not implemented");
}

/**
 * @param {typeof APPSTATE} state
 * @param {typeof DEFAULT_SETTINGS} settings
 * @returns {{
 *   conditions: typeof CONDITIONS,
 *   readings: typeof CONDITIONS[]
 * }}
 */
async function runAnalysisManual(state, settings, location) {
  throw new Error("Not implemented");
}

/**
 * Fires multiple requests (defined in {@link settings}) to fetch historical weather conditions for the given location.
 * Requests are sent in chunks of {@link chunkSize} to be gentler on the API.
 * Each request covers only a set days (defined in {@link settings}) around the equivalent date in that year.
 *
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @param {string} referenceTime Date to center the window around
 * @param {typeof DEFAULT_SETTINGS} settings
 * @param {number} chunkSize Number of requests to send at once
 * @param {number} timeoutMs Timeout between each chunk of requests in ms
 * @returns {Promise<typeof CONDITIONS[]>}
 */
async function fetchHistoricalWindow(
  lat,
  lon,
  referenceTime,
  settings,
  chunkSize = 5,
  timeoutMs = 500,
) {
  const requests = Array.from({ length: settings.historicalYears }, (_, i) => {
    const year = i + 1;

    const center = new Date(referenceTime);
    center.setFullYear(center.getFullYear() - year);

    const start = shiftDays(center, -settings.windowDays);
    const end = shiftDays(center, settings.windowDays);

    return () =>
      fetchHistoricalWeather(lat, lon, toDateStr(start), toDateStr(end));
  });

  const chunks = toChunks(requests, chunkSize);
  const results = [];
  for (const batch of chunks) {
    results.push(...(await Promise.all(batch.map((fn) => fn()))));
    await new Promise((r) => setTimeout(r, timeoutMs));
  }
  return results.flat();
}
