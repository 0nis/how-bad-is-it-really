import "./children/hero/index.js";
import "./children/gauge/index.js";
import "./children/stats/index.js";

import { panelSheet } from "../../../styles/sheets/panel.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { style } from "./style.js";
import { template } from "./template.js";
import { renderShadow } from "../../../utils/shadow.js";
import { HISTORICAL_YEARS } from "../../../constants.js";
import { formatISO } from "../../../utils/date.js";

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
  }

  setResult(result) {
    this.setDateTime(result.datetime);
    this.setLocation(result.location);
    this.setSigma(result.sigma);

    this.hero.setData(result);
    this.gauge.setData(result);
    this.stats.setData(result);
  }

  setDateTime(datetime) {
    this.datetimeEl.textContent = formatISO(datetime);
  }

  setLocation(loc) {
    this.locationEl.textContent = [loc.name, loc.admin1, loc.country]
      .filter(Boolean)
      .join(", ");
  }

  setSigma(sigma) {
    this.sigmaEl.textContent = `${sigma > 0 ? "+" : ""}${sigma.toFixed(2)}σ from the ${HISTORICAL_YEARS}-year seasonal mean`;
  }

  show(result) {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

customElements.define("result-panel", ResultPanel);
