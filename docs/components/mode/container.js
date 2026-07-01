import "./toggle/index.js";
import "./panels/current/index.js";
import "./panels/manual/index.js";
import "./panels/past/index.js";
import "./start/index.js";

import { globalSheet } from "../../styles/sheets/global.js";
import { renderShadow } from "../../utils/shadow.js";

const template = /* HTML */ `
  <div id="container">
    <mode-toggle></mode-toggle>
    <current-panel></current-panel>
    <past-panel hidden></past-panel>
    <manual-panel hidden></manual-panel>
  </div>
`;

const style = /* CSS */ `
    #container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

class ModeContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];
  }

  connectedCallback() {
    renderShadow(this.shadowRoot, template, style);
  }
}

customElements.define("mode-container", ModeContainer);
