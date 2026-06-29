export const template = /* HTML */ `
  <div class="stats-card">
    <div class="stats-grid">
      <div class="row header">
        <div>Metric</div>
        <div>Now</div>
        <div>Normal</div>
        <div>Variability</div>
      </div>

      <div id="temp" class="row">
        <span>Temperature</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>

      <div id="feels" class="row">
        <span>Feels like</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>

      <div id="hum" class="row">
        <span>Humidity</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>

      <div id="prec" class="row">
        <span>Precipitation</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>

      <div id="wind" class="row">
        <span>Wind</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>

      <div id="cc" class="row">
        <span>Cloud cover</span>
        <span data-now></span>
        <span data-mean></span>
        <span data-std></span>
      </div>
    </div>
  </div>
`;
