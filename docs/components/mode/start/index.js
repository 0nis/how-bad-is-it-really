import { globalSheet } from "../../../styles/sheets/global.js";
import { renderShadow } from "../../../utils/shadow.js";
import { style } from "./style.js";
import { template } from "./template.js";

class StartAnalysisButton extends HTMLElement {
  static observedAttributes = ["disabled"];

  // TODO: Set disabled to true when a location hasn't been selected yet

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
  }

  attributeChangedCallback() {
    this.sync();
  }

  sync() {
    this.button.disabled = this.disabled;
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(value) {
    this.toggleAttribute("disabled", value);
  }
}

customElements.define("start-analysis-button", StartAnalysisButton);
