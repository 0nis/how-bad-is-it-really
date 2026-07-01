import { DEFAULT_SETTINGS } from "../../../../app/settings.js";

export const template = /* HTML */ `
  <div id="panel" class="panel">
    <div class="actions">
      <p class="description">
        Compares today's current feels-like temperature to the exact same time
        of day and year over the past
        <span id="year-count">${DEFAULT_SETTINGS.historicalYears}</span>
        <span id="year-count-desc">years</span>.
      </p>
      <start-analysis-button></start-analysis-button>
    </div>
  </div>
`;
