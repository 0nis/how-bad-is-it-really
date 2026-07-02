import { cleanNumberString, formatNumber } from "./string.js";

/**
 * Formats temperature to 1 decimal point, defaulting to °C
 *
 * @param {number} valueC value in °C
 * @param {"metric" | "imperial"} unitSystem metric or imperial
 * @returns {{value: string, unit: string}} Formatted temperature
 */
export function formatTemp(valueC, unitSystem = "metric") {
  return formatNumber(
    isImperial(unitSystem) ? cToF(valueC) : valueC,
    isImperial(unitSystem) ? "°F" : "°C",
  );
}

/**
 * Formats precipitation to 1 decimal point, defaulting to mm
 *
 * @param {number} valueMM value in mm
 * @param {"metric" | "imperial"} unitSystem metric or imperial
 * @returns {{value: string, unit: string}} Formatted precipitation
 */
export function formatPrecipitation(value, unitSystem = "metric") {
  return formatNumber(
    isImperial(unitSystem) ? mmToIn(value) : value,
    isImperial(unitSystem) ? " in." : " mm",
  );
}

/**
 * Formats wind speed to 1 decimal point, defaulting to km/h
 *
 * @param {number} value value in km/h
 * @param {"metric" | "imperial"} unitSystem metric or imperial
 * @returns {{value: string, unit: string}} Formatted wind speed
 */
export function formatWind(value, unitSystem = "metric") {
  return formatNumber(
    isImperial(unitSystem) ? kmhToMph(value) : value,
    isImperial(unitSystem) ? " mph" : " km/h",
  );
}

/**
 * @param {number} c °C
 * @returns {number} °F
 */
export function cToF(c) {
  return (c * 9) / 5 + 32;
}

/**
 * @param {number} f °F
 * @returns {number} °C
 */
export function fToC(f) {
  return ((f - 32) * 5) / 9;
}

/**
 * @param {number} mm mm (millimeters)
 * @returns {number} in (inches)
 */
export function mmToIn(mm) {
  return mm * 0.0393701;
}

/**
 * @param {number} kmh km/h (kilometers per hour)
 * @returns {number} mph (miles per hour)
 */
export function kmhToMph(kmh) {
  return kmh * 0.621371;
}

function isImperial(unitSystem) {
  return unitSystem === "imperial";
}
