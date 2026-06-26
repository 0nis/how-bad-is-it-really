class AppRoot extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ ``;
  }
}

customElements.define("app-root", AppRoot);
