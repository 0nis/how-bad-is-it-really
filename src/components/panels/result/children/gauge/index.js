import { resetSheet } from "../../../../../styles/reset";
import { renderShadow } from "../../../../../utils/shadow";
import { style } from "./style";
import { template } from "./template";

class ResultGauge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [resetSheet];
  }

  connectedCallback() {
    renderShadow(this.shadowRoot, template, style);
  }
}

customElements.define("result-gauge", ResultGauge);
