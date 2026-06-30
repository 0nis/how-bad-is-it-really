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

    this.settingsTrigger = this.shadowRoot.querySelector("#settings-trigger");

    this.settingsTrigger.addEventListener("click", () => {
      setState({ settingsOpen: !getState().settingsOpen });
    });

    this.unsubscribe = subscribe((state) => {
      if (state.settingsOpen)
        this.settingsTrigger.setAttribute("aria-expanded", "true");
      else if (!state.settingsOpen)
        this.settingsTrigger.setAttribute("aria-expanded", "false");
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  render() {
    renderShadow(this.shadowRoot, template, style);
  }
}

customElements.define("site-header", SiteHeader);
