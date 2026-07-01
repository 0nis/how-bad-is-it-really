import { getSettings, subscribeToSettings } from "../../../../app/settings.js";
import { subscribe } from "../../../../app/store.js";
import { globalSheet } from "../../../../styles/sheets/global.js";
import { renderShadow } from "../../../../utils/shadow.js";
import { pluralize } from "../../../../utils/string.js";
import { modeSheet } from "../../style.js";
import { setYearCount } from "../helpers.js";
import { template } from "./template.js";

class ModeCurrentPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet, modeSheet];
  }

  connectedCallback() {
    renderShadow(this.shadowRoot, template);

    this.unsubscribeState = subscribe(
      (state) => state.mode,
      (mode) => {
        this.hidden = mode !== "current";
      },
    );

    this.unsubscribeSettings = setYearCount(
      this.shadowRoot.querySelector("#year-count"),
      this.shadowRoot.querySelector("#year-count-desc"),
    );
  }

  disconnectedCallback() {
    this.unsubscribeState?.();
    this.unsubscribeSettings?.();
  }
}

customElements.define("current-panel", ModeCurrentPanel);
