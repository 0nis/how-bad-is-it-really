import { panelSheet } from "../../../styles/sheets/panel.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { template } from "./template.js";
import { renderShadow } from "../../../utils/shadow.js";
import { HISTORICAL_YEARS } from "../../../constants.js";
import { style } from "./style.js";

class LoadingPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, panelSheet];

    renderShadow(this.shadowRoot, template, style);

    this.shadowRoot.querySelector("#count").textContent = HISTORICAL_YEARS;
    this.locationEl = this.shadowRoot.querySelector("#location");
  }

  show(locationName) {
    this.locationEl.textContent = locationName;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

customElements.define("loading-panel", LoadingPanel);
