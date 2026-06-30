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
