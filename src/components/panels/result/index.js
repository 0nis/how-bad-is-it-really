import "./children/hero/index.js";
import "./children/gauge/index.js";
import "./children/stats/index.js";

import { panelSheet } from "../../../styles/panel";
import { resetSheet } from "../../../styles/reset";
import { style } from "./style";
import { template } from "./template";
import { renderShadow } from "../../../utils/shadow.js";

class ResultPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [resetSheet, panelSheet];
  }

  render() {
    renderShadow(this.shadowRoot, template, style);
  }
}

customElements.define("result-panel", ResultPanel);
