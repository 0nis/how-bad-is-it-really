export const GEOCODING_BASE = "https://geocoding-api.open-meteo.com/v1";
export const ARCHIVE_BASE = "https://archive-api.open-meteo.com/v1";
export const FORECAST_BASE = "https://api.open-meteo.com/v1";

/** The number of years of historical data to fetch */
export const HISTORICAL_YEARS = 1; // TODO temp, switch back to 30 after testing

/** The number of days around the target date to compare */
export const WINDOW_DAYS = 7;

/** The number of hours around the target hour to compare */
export const WINDOW_HOURS = 2;

/** Minimum number of readings for analysis */
export const MIN_READINGS = 10;
