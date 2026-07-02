import { globalSheet } from "../../../../../styles/sheets/global.js";
import { renderShadow } from "../../../../../utils/shadow.js";
import {
  formatPrecipitation,
  formatTemp,
  formatWind,
} from "../../../../../utils/weather.js";
import { style } from "./style.js";
import { template } from "./template.js";
import { APPSTATE } from "../../../../../types.js";
import { el } from "../../../../../utils/dom.js";
import { flatten } from "../../../../../utils/objects.js";

class ResultStats extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];

    renderShadow(this.shadowRoot, template, style);

    this.tbodyEl = this.shadowRoot.querySelector("tbody");

    this.metrics = [
      {
        key: "temperature",
        label: "Temperature",
        format: (v, units) => formatTemp(v, units),
      },
      {
        key: "apparentTemperature",
        label: "Feels-like",
        format: (v, units) => formatTemp(v, units),
      },
      {
        key: "humidity",
        label: "Humidity",
        format: (v) => {
          return { value: `${v.toFixed(1)}`, unit: "%" };
        },
      },
      {
        key: "precipitation",
        label: "Precipitation",
        format: (v, units) => formatPrecipitation(v, units),
      },
      {
        key: "windSpeed",
        label: "Wind",
        format: (v, units) => formatWind(v, units),
      },
      {
        key: "cloudCover",
        label: "Cloud cover",
        format: (v) => {
          return { value: `${Math.round(v)}`, unit: "%" };
        },
      },
      {
        key: "temperature.min",
        label: "Min temperature",
        format: (v, units) => formatTemp(v, units),
      },
      {
        key: "temperature.max",
        label: "Max temperature",
        format: (v, units) => formatTemp(v, units),
      },
      {
        key: "apparentTemperature.min",
        label: "Min feels-like",
        format: (v, units) => formatTemp(v, units),
      },
      {
        key: "apparentTemperature.max",
        label: "Max feels-like",
        format: (v, units) => formatTemp(v, units),
      },
    ];
  }

  /**
   * @param {typeof APPSTATE.analysis} result
   * @param {"metric" | "imperial"} unitSystem
   */
  setData(result, unitSystem = "metric") {
    this.tbodyEl.innerHTML = "";
    this.hidden = false;

    const flatObserved = flatten(result.observed);
    const flatHistorical = flatten(result.historical);

    for (const m of this.metrics) {
      const observed = flatObserved[m.key];
      const mean = flatHistorical[`${m.key}.mean`];
      const std = flatHistorical[`${m.key}.std`];

      if (mean === undefined || std === undefined) continue;

      const fmt = (v) => m.format(v, unitSystem);

      const row = this.buildRow(
        m,
        observed === undefined ? { value: "N/A", unit: "" } : fmt(observed),
        fmt(mean),
        fmt(std),
      );

      if (result.basedOn === m.key)
        row.style.setProperty("color", "var(--accent)");

      this.tbodyEl.appendChild(row);
    }

    if (this.tbodyEl.children.length === 0) this.hidden = true;
  }

  buildRow(m, observed, mean, std) {
    return el(
      "tr",
      {
        attrs: {
          "data-key": m.key,
        },
      },
      [
        el("th", {
          textContent: m.label,
          attrs: {
            scope: "row",
          },
        }),
        el("td", { attrs: { "data-observed": "" } }, [
          el("span", {
            textContent: observed.value,
            className: `value ${observed.value === "N/A" ? "na" : ""}`,
          }),
          el("span", {
            textContent: observed.unit,
            className: `unit ${observed.value === "N/A" ? "na" : ""}`,
          }),
        ]),
        el("td", { attrs: { "data-mean": "" } }, [
          el("span", { textContent: mean.value, className: "value" }),
          el("span", { textContent: mean.unit, className: "unit" }),
        ]),
        el("td", { attrs: { "data-std": "" } }, [
          el("span", { textContent: `±${std.value}`, className: "value" }),
          el("span", { textContent: std.unit, className: "unit" }),
        ]),
      ],
    );
  }
}

customElements.define("result-stats", ResultStats);
