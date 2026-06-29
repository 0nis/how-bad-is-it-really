/**
 * Formats temperature to 1 decimal point, defaulting to °C
 *
 * @param {number} valueC value in °C
 * @param {"C" | "F} unit celsius or fahrenheit
 * @returns {string} Formatted temperature
 */
export function formatTemp(valueC, unit = "C") {
  unit = isUSA() ? "F" : "C"; // TODO: TEMP
  if (unit === "F") return `${cToF(Number(valueC)).toFixed(1)}°F`;
  return `${Number(valueC).toFixed(1)}°C`;
}

/**
 * Formats precipitation to 1 decimal point, defaulting to mm
 *
 * @param {number} valueMM value in mm
 * @param {"mm" | "in"} unit millimeters or inches
 * @returns {string} Formatted precipitation
 */
export function formatPrecipitation(value, unit = "mm") {
  unit = isUSA() ? "in" : "mm"; // TODO: TEMP
  if (unit === "in") return `${mmToIn(Number(value)).toFixed(1)} in.`;
  return `${Number(value).toFixed(1)} mm`;
}

/**
 * Formats wind speed to 1 decimal point, defaulting to km/h
 *
 * @param {number} value value in km/h
 * @param {"kmh" | "mph"} unit kilometers per hour or miles per hour
 * @returns {string} Formatted wind speed
 */
export function formatWind(value, unit = "kmh") {
  unit = isUSA() ? "mph" : "kmh"; // TODO: TEMP
  if (unit === "mph") return `${kmhToMph(Number(value)).toFixed(1)} mph.`;
  return `${Number(value).toFixed(1)} km/h.`;
}

/**
 * @param {number} c °C
 * @returns {number} °F
 */
export function cToF(c) {
  return (c * 9) / 5 + 32;
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

// TODO: Temp until I make this an explicit setting
// I'm very aware that this is *not* perfect lol I have my locale set to en-US despite being in NL
function isUSA() {
  return (
    Intl.DateTimeFormat(navigator.language, {
      temperature: "numeric",
    }).resolvedOptions?.()?.locale === "en-US"
  );
}
