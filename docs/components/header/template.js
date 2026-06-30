export const template = /* HTML */ `
  <header>
    <div class="top">
      <div class="logo">σ°</div>
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
    <h1 class="title">How bad is it, really?</h1>
    <p class="subtitle">
      30°C in Helsinki isn't 30°C in Bangkok. Search any city to see how extreme
      its temperature truly is, compared to what's normal
      <em>there</em>.
    </p>
  </header>
`;
