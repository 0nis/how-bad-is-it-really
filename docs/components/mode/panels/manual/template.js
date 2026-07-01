import { DEFAULT_SETTINGS } from "../../../../app/settings.js";

export const template = /* HTML */ `
  <div id="panel" class="panel">
    <div class="fields">
      <div class="field">
        // TODO: Change to F depending on user settings and process accordingly
        <label for="temp" class="label">Temperature (°C)</label>
        <input
          id="temp"
          type="number"
          placeholder="e.g. 32"
          step="0.1"
          min="-80"
          max="60"
        />
      </div>
      <div class="field">
        <label for="humidity" class="label"
          >Humidity % <span class="optional">optional</span></label
        >
        <input
          id="humidity"
          type="number"
          placeholder="e.g. 70"
          step="1"
          min="0"
          max="100"
        />
      </div>
      <div class="field">
        <label for="date" class="label"
          >Date <span class="optional">optional</span></label
        >
        <input id="date" type="date" class="input" />
      </div>
    </div>
    <div class="actions">
      <p class="description">
        Tests any raw air temperature against the all-time highest or lowest
        records for this location over the past
        <span id="year-count">${DEFAULT_SETTINGS.historicalYears}</span>
        <span id="year-count-desc">years</span>.
      </p>
      <start-analysis-button disabled></start-analysis-button>
    </div>
  </div>
`;
