import { panelSheet } from "../../../styles/sheets/panel.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { template } from "./template.js";
import { renderShadow } from "../../../utils/shadow.js";
import { style } from "./style.js";

class ErrorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, panelSheet];

    renderShadow(this.shadowRoot, template, style);

    this.messageEl = this.shadowRoot.querySelector("#message");
  }

  /** @param {string} msg error message to show the user */
  show(msg) {
    this.messageEl.textContent = msg;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

customElements.define("error-panel", ErrorPanel);
