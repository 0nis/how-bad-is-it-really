export const template = /* HTML */ `
  <section id="result" class="panel" aria-live="polite">
    <div class="context">
      <p id="location"></p>
      <p id="datetime"></p>
    </div>
    <result-hero></result-hero>
    <p id="sigma"></p>
    <result-gauge></result-gauge>
    <hr class="divider" />
    <result-stats></result-stats>
  </section>
`;
