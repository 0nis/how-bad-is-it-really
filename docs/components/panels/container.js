import "./result/index.js";
import "./loading/index.js";
import "./error/index.js";

import { renderShadow } from "../../utils/shadow.js";
import { setState, subscribe } from "../../app/store.js";
import { getSettings } from "../../app/settings.js";

const template = /* HTML */ `
  <loading-panel hidden></loading-panel>
  <error-panel hidden></error-panel>
  <result-panel hidden></result-panel>
`;

class PanelContainer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    renderShadow(this.shadowRoot, template);

    this.loading = this.shadowRoot.querySelector("loading-panel");
    this.error = this.shadowRoot.querySelector("error-panel");
    this.result = this.shadowRoot.querySelector("result-panel");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.addEventListener("analysis-start", () => {
      if (prefersReducedMotion) return;
      this.scrollToSelf();
    });
  }

  connectedCallback() {
    this.unsubscribeStatus = subscribe(
      (state) => state.status,
      (status, state) => {
        this.hide();

        switch (status) {
          case "loading":
            this.hidden = false;
            this.loading.show(
              state.selectedLocation.name,
              getSettings().historicalYears,
            );
            break;

          case "error":
            this.hidden = false;
            this.error.show(state.error);
            break;

          case "success":
            this.hidden = false;
            this.result.setResult(state.analysis);
            this.result.show();
            break;
        }
      },
    );

    this.unsubscribeMode = subscribe(
      (state) => state.mode,
      () => {
        setState({ status: "idle" });
      },
    );

    this.unsubscribeError = subscribe(
      (state) => state.error,
      (err, state) => {
        if (err && state.status === "error") {
          this.hidden = false;
          this.error.show(err);
        }
      },
    );
  }

  hide() {
    this.hidden = true;
    this.loading.hide();
    this.error.hide();
    this.result.hide();
  }

  disconnectedCallback() {
    this.unsubscribeStatus?.();
    this.unsubscribeMode?.();
    this.unsubscribeError?.();
  }

  scrollToSelf() {
    requestAnimationFrame(() => {
      this.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

customElements.define("panel-container", PanelContainer);
