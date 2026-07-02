/**
 * Capitalize the first letter of a string
 *
 * @param {string} str any string
 * @returns {string}
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Pluralize a word
 *
 * @param {string} word a word
 * @param {number} count amount of {@link word}s
 * @returns
 */
export function pluralize(word, count) {
  return count === 1 ? word : `${word}s`;
}

/**
 * Remove trailing ".0" from a number string
 *
 * @param {string} str
 * @returns {string}
 */
export function cleanNumberString(str) {
  return str.replace(/\.0(?=\D|$)/, "");
}

/**
 * Format a number
 *
 * @param {number} value number
 * @param {string} unit suffix
 * @param {{fixed?: number}} options fixed = number of decimal places
 * @returns {{value: string, unit: string}} Formatted number, separating value and unit
 */
export function formatNumber(value, unit, { fixed = 1 } = {}) {
  const n = Number(value);
  const str = n.toFixed(fixed);
  const clean = str.endsWith(".0") ? String(Math.round(n)) : str;
  return {
    value: clean,
    unit,
  };
}
