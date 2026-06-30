import { getSettings, subscribeToSettings } from "../../app/settings.js";
import { getState, setState, subscribe } from "../../app/store.js";
import { globalSheet } from "../../styles/sheets/global.js";
import { renderShadow } from "../../utils/shadow.js";
import { style } from "./style.js";
import { template } from "./template.js";

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];
  }

  connectedCallback() {
    this.render();
    this.initSettings();
    this.initUnits();
  }

  disconnectedCallback() {
    this.unsubscribeState?.();
    this.unsubscribeSettings?.();
  }

  render() {
    renderShadow(this.shadowRoot, template, style);
  }

  initSettings() {
    const settingsTrigger = this.shadowRoot.querySelector("#settings-trigger");

    settingsTrigger.addEventListener("click", () => {
      setState({ settingsOpen: !getState().settingsOpen });
    });

    this.unsubscribeState = subscribe(
      (state) => state.settingsOpen,
      (settingsOpen) => {
        if (settingsOpen) settingsTrigger.setAttribute("aria-expanded", "true");
        else if (!settingsOpen)
          settingsTrigger.setAttribute("aria-expanded", "false");
      },
    );
  }

  initUnits() {
    this.setUnits();
    this.unsubscribeSettings = subscribeToSettings((settings) => {
      this.setUnits();
    });
  }

  setUnits() {
    const system = getSettings().unitSystem;
    const values = [
      { system: "metric", value: "30°C" },
      { system: "imperial", value: "90°F" },
    ];
    this.shadowRoot.querySelectorAll(".example-unit").forEach((unit) => {
      unit.textContent = values.find((v) => v.system === system).value;
    });
  }
}

customElements.define("site-header", SiteHeader);
