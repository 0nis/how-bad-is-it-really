import { GEOCODING_BASE } from "../constants.js";
import { LOCATION } from "../types.js";

/**
 * Search for locations by name using Open-Meteo's geocoding API.
 *
 * @param {string} query Search query
 * @param {number} count Max results to return
 * @returns {Promise<typeof LOCATION[]>}
 */
export async function searchLocations(query, count = 10) {
  if (!query || query.trim().length < 2) return [];

  const url = new URL(`${GEOCODING_BASE}/search`);
  url.searchParams.set("name", query.trim());
  url.searchParams.set("count", count);
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");

  let res;
  try {
    res = await fetch(url);
  } catch {
    throw new Error(
      "Unable to reach Open-Meteo's geocoding API. Please check your internet connection.",
    );
  }
  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error(
      `${res.status}: ${res.statusText}${data.reason ? `: ${data.reason}` : ""}`,
    );
  }

  const data = await res.json();
  return (data.results ?? []).map((raw) => {
    return {
      name: raw.name,
      country: raw.country ?? "",
      admin1: raw.admin1 ?? null,
      admin2: raw.admin2 ?? null,
      latitude: raw.latitude,
      longitude: raw.longitude,
      elevation: raw.elevation ?? null,
      timezone: raw.timezone ?? "UTC",
    };
  });
}
