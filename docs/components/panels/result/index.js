import "./children/hero/index.js";
import "./children/gauge/index.js";
import "./children/stats/index.js";
import "./children/context/index.js";

import { panelSheet } from "../style.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { style } from "./style.js";
import { template } from "./template.js";
import { renderShadow } from "../../../utils/shadow.js";
import { formatISO } from "../../../utils/date.js";
import { APPSTATE } from "../../../types.js";
import { subscribeToSettings } from "../../../app/settings.js";

class ResultPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, panelSheet];

    renderShadow(this.shadowRoot, template, style);

    this.locationEl = this.shadowRoot.querySelector("#location");
    this.datetimeEl = this.shadowRoot.querySelector("#datetime");
    this.sigmaEl = this.shadowRoot.querySelector("#sigma");

    this.hero = this.shadowRoot.querySelector("result-hero");
    this.gauge = this.shadowRoot.querySelector("result-gauge");
    this.stats = this.shadowRoot.querySelector("result-stats");
    this.context = this.shadowRoot.querySelector("result-context");
  }

  connectedCallback() {
    this.unsubscribe = subscribeToSettings((settings) => {
      if (!this._result) return;
      this.stats.setData(this._result, settings.unitSystem);
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  /** @param {typeof APPSTATE.analysis} result */
  setResult(result) {
    this._result = result;

    this.setDateTime(result.datetime);
    this.setLocation(result.location);
    this.setSigma(result.sigma, result.context.settings.historicalYears);

    this.hero.setData(result);
    this.gauge.setData(result);
    this.stats.setData(result, result.context.settings.unitSystem);
    this.context.setData(result);
  }

  /** @param {string} datetime ISO 8601 */
  setDateTime(datetime) {
    this.datetimeEl.textContent = formatISO(datetime);
  }

  /** @param {typeof APPSTATE.analysis.location} loc */
  setLocation(loc) {
    this.locationEl.textContent = [loc.name, loc.admin1, loc.country]
      .filter(Boolean)
      .join(", ");
  }

  /**
   * @param {number} sigma
   * @param {number} historicalYears as defined in settings
   */
  setSigma(sigma, historicalYears) {
    this.sigmaEl.textContent = `${sigma > 0 ? "+" : ""}${sigma.toFixed(2)}σ from the ${historicalYears}-year seasonal mean`;
  }
}

customElements.define("result-panel", ResultPanel);
