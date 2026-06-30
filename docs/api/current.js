import { FORECAST_BASE } from "../constants.js";
import { CONDITIONS } from "../types.js";

/**
 * Fetch today's weather conditions for a coordinate.
 * Uses the forecast API's past_days=1 to ensure today is always included.
 *
 * 'time' is the ISO 8601 date string in the locale timezone of the location.
 *
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @returns {Promise<typeof CONDITIONS[]>}
 */
export async function fetchCurrentConditions(lat, lon) {
  const url = new URL(`${FORECAST_BASE}/forecast`);

  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));

  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "wind_speed_10m",
      "precipitation",
      "cloud_cover",
    ].join(","),
  );

  url.searchParams.set("timezone", "auto");

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Forecast fetch failed: ${res.status}`);

  const data = await res.json();

  return {
    datetime: data.current.time,
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    precipitation: data.current.precipitation,
    cloudCover: data.current.cloud_cover,
  };
}
