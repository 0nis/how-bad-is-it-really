/**
 * Format a Date as YYYY-MM-DD for Open-Meteo query params
 *
 * @param {Date} date The date to format
 * @returns {string} The formatted date
 */
export function toDateStr(date) {
  return date.toISOString().slice(0, 10);
}

/**
 * Clones a date and adds/subtracts a specific number of days.
 *
 * @param {Date} date The base date to shift
 * @param {number} days Number of days to add (positive) or subtract (negative)
 * @returns {Date} The shifted date
 */
export const shiftDays = (date, days) => {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
};
