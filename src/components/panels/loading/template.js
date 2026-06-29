export const template = /* HTML */ `
  <section id="loading" class="panel" aria-live="polite" aria-busy="true">
    <div class="inner">
      <div class="spinner" aria-hidden="true"></div>
      <p>
        Fetching <span id="count"></span> years of climate data for
        <strong id="location"></strong>…
      </p>
      <p class="note">
        Pulling from the ERA5 global archive, this may take a while.
      </p>
    </div>
  </section>
`;
