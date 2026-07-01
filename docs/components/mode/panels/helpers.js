import { getSettings, subscribeToSettings } from "../../../app/settings.js";
import { pluralize } from "../../../utils/string.js";

/**
 *
 * @param {HTMLElement} countEl ex: span with a number of years
 * @param {HTMLElement} countDescEl ex: span with "years"
 * @returns
 */
export function setYearCount(countEl, countDescEl) {
  const settings = getSettings();
  setYearCountEls(countEl, countDescEl, settings.historicalYears);

  return subscribeToSettings((settings) => {
    setYearCountEls(countEl, countDescEl, settings.historicalYears);
  });
}

function setYearCountEls(countEl, countDescEl, years) {
  countEl.textContent = years;
  countDescEl.textContent = pluralize("year", years);
}
