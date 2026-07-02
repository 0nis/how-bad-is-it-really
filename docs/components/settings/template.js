import { DEFAULT_SETTINGS } from "../../app/settings.js";

export const template = /* HTML */ `
  <div id="overlay" class="overlay" hidden></div>

  <aside
    id="panel"
    class="panel"
    hidden
    role="dialog"
    aria-label="Settings"
    aria-modal="true"
  >
    <div class="panel-header">
      <h2 class="panel-title">Settings</h2>
      <button
        id="close"
        class="close-btn"
        type="button"
        aria-label="Close the settings panel"
        title="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </button>
    </div>

    <div class="section">
      <label for="setting-units" class="section-label">Units</label>
      <segmented-input id="setting-units"></segmented-input>
    </div>

    <div class="section">
      <label for="setting-comparison-metric" class="section-label"
        >Compare by</label
      >
      <segmented-input id="setting-comparison-metric"></segmented-input>
    </div>

    <div class="section">
      <slider-input id="setting-historical-years" unit="yr">
        <label
          slot="label"
          class="section-label"
          for="setting-historical-years-input"
          >Historical years</label
        >
      </slider-input>
      <p class="hint">How far back to pull comparison data from.</p>
    </div>

    <div class="section">
      <slider-input id="setting-window-days" unit="day" prefix="±">
        <label
          slot="label"
          class="section-label"
          for="setting-window-days-input"
          >Day window</label
        >
      </slider-input>
      <p class="hint">Days around the selected date to include, each year.</p>
    </div>

    <div class="section">
      <slider-input id="setting-window-hours" unit="hr" prefix="±">
        <label
          slot="label"
          class="section-label"
          for="setting-window-hours-input"
          >Hour window</label
        >
      </slider-input>
      <p class="hint">Hours around the selected time to include.</p>
    </div>

    <div class="section">
      <slider-input id="setting-min-readings">
        <label
          slot="label"
          class="section-label"
          for="setting-min-readings-input"
          >Minimum readings</label
        >
      </slider-input>
      <p class="hint">
        Minimum number of historical readings needed for analysis.
      </p>
    </div>

    <button id="reset" class="reset-btn" type="button">
      Reset to defaults
    </button>
  </aside>
`;
