import { globalSheet } from "../../../styles/sheets/global.js";
import { el } from "../../../utils/dom.js";
import { renderShadow } from "../../../utils/shadow.js";
import { style } from "./style.js";
import { template } from "./template.js";

class SearchSuggestions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalSheet];
    this.locations = [];
  }

  connectedCallback() {
    renderShadow(this.shadowRoot, template, style);
    this.listEl = this.shadowRoot.querySelector("#suggestions");
  }

  setSuggestions(locations) {
    this.locations = locations || [];
    this.render();
  }

  render() {
    if (!this.listEl) return;

    if (!this.locations.length) {
      this.listEl.hidden = true;
      this.listEl.replaceChildren();
      return;
    }

    const fragment = document.createDocumentFragment();

    for (const [i, loc] of this.locations.entries()) {
      const li = el(
        "li",
        {
          className: "item",
          role: "option",
          tabIndex: 0,
        },
        [
          el("span", {
            className: "primary",
            textContent: loc.name,
          }),
          el("span", {
            className: "secondary",
            textContent: this.format(loc),
          }),
        ],
      );

      const select = () => {
        this.select(i);
      };

      li.addEventListener("click", select);

      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select();
        }
      });

      fragment.appendChild(li);
    }

    this.listEl.replaceChildren(fragment);
    this.listEl.hidden = false;
  }

  select(index) {
    const loc = this.locations[index];

    this.dispatchEvent(
      new CustomEvent("location-selected", {
        detail: loc,
        bubbles: true,
        composed: true,
      }),
    );

    this.listEl.hidden = true;
  }

  format(loc) {
    return [loc.admin2, loc.admin1, loc.country].filter(Boolean).join(", ");
  }
}

customElements.define("search-suggestions", SearchSuggestions);
