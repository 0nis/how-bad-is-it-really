import { globalSheet } from "../../../../../styles/sheets/global.js";
import { renderShadow } from "../../../../../utils/shadow.js";
import { style } from "./style.js";
import { template } from "./template.js";

class ResultGauge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];

    renderShadow(this.shadowRoot, template, style);

    this.barEl = this.shadowRoot.querySelector(".bar");
    this.markerEl = this.shadowRoot.querySelector(".marker");
  }

  setData(result) {
    const clamped = Math.max(-4, Math.min(4, result.sigma));
    const norm = clamped / 4;
    const abs = Math.abs(norm);
    const direction = norm < 0 ? -1 : 1;
    this.barEl.style.transform = `scaleX(${abs * direction})`;

    const color = this.getColor(result.severity);
    this.barEl.style.setProperty("--gauge-color", color);

    const pct = 50 + (clamped / 4) * 50;
    this.markerEl.style.left = `${pct}%`;
  }

  getColor(severity) {
    const colors = [
      "var(--gauge-normal)",
      "var(--gauge-mild)",
      "var(--gauge-moderate)",
      "var(--gauge-severe)",
      "var(--gauge-extreme)",
      "var(--gauge-critical)",
    ];
    return colors[Math.min(severity, colors.length - 1)];
  }
}

customElements.define("result-gauge", ResultGauge);
