import { subscribe } from "../../../../app/store.js";
import { globalSheet } from "../../../../styles/sheets/global.js";
import { renderShadow } from "../../../../utils/shadow.js";
import { modeSheet } from "../../style.js";
import { setYearCount } from "../helpers.js";
import { template } from "./template.js";

class ModeManualPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, modeSheet];
  }

  connectedCallback() {
    renderShadow(this.shadowRoot, template);

    this.unsubscribe = subscribe(
      (state) => state.mode,
      (mode) => {
        this.hidden = mode !== "manual";
      },
    );

    this.unsubscribeSettings = setYearCount(
      this.shadowRoot.querySelector("#year-count"),
      this.shadowRoot.querySelector("#year-count-desc"),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.unsubscribeSettings?.();
  }
}

customElements.define("manual-panel", ModeManualPanel);
