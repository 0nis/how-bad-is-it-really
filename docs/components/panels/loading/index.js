import { panelSheet } from "../../../styles/sheets/panel.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { template } from "./template.js";
import { renderShadow } from "../../../utils/shadow.js";
import { style } from "./style.js";
import { pluralize } from "../../../utils/string.js";

class LoadingPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, panelSheet];

    renderShadow(this.shadowRoot, template, style);

    this.countEl = this.shadowRoot.querySelector("#count");
    this.locationEl = this.shadowRoot.querySelector("#location");
    this.countDesc = this.shadowRoot.querySelector("#count-desc");
  }

  /**
   * @param {string} location Name of location to fetch data from
   * @param {number} years Years of historical data to fetch
   */
  show(location, years) {
    this.countEl.textContent = years;
    this.countDesc.textContent = pluralize("year", years);
    this.locationEl.textContent = location;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

customElements.define("loading-panel", LoadingPanel);
