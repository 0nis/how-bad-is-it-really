export const template = /* HTML */ `
  <header>
    <div class="top">
      <div class="logo">σ°</div>
      <div class="actions">
        <a
          class="github-link"
          href="https://github.com/0nis/how-bad-is-it"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          title="GitHub"
        >
          <img src="./assets/icons/github.svg" alt="Github logo" />
        </a>
        <button
          id="settings-trigger"
          class="settings-trigger"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="settings-panel"
          title="Settings"
        >
          <img src="./assets/icons/settings.svg" alt="Settings" />
        </button>
      </div>
    </div>
    <h1 class="title">How bad is it, really?</h1>
    <p class="subtitle">
      <span class="example-unit">30°C</span> in Helsinki isn't
      <span class="example-unit">30°C</span> in Bangkok. Search any city to see
      how extreme its temperature truly is, compared to what's normal
      <em>there</em>.
    </p>
  </header>
`;
