import { subscribe } from "../../../app/store.js";
import { globalSheet } from "../../../styles/sheets/global.js";
import { renderShadow } from "../../../utils/shadow.js";
import { style } from "./style.js";
import { template } from "./template.js";

class StartAnalysisButton extends HTMLElement {
  static observedAttributes = ["disabled"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];

    renderShadow(this.shadowRoot, template, style);

    this.button = this.shadowRoot.querySelector("button");
  }

  connectedCallback() {
    this.sync();

    this.button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("start-analysis", {
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.unsubscribe = subscribe(
      (state) => state.selectedLocation,
      (location) => {
        this.locationSelected = location !== null;
        this.sync();
      },
    );
  }

  attributeChangedCallback() {
    this.sync();
  }

  sync() {
    if (!this.ready || !this.locationSelected) this.disabled = true;
    else this.disabled = false;

    this.button.disabled = this.disabled;
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(value) {
    this.toggleAttribute("disabled", value);
  }

  get ready() {
    return this.hasAttribute("ready");
  }

  set ready(value) {
    this.toggleAttribute("ready", value);
    this.sync();
  }
}

customElements.define("start-analysis-button", StartAnalysisButton);
