import "./app/root.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

const meta = document.querySelector('meta[name="theme-color"]');
const mq = window.matchMedia("(prefers-color-scheme: dark)");

function updateThemeColor(e) {
  const dark = e.matches;
  meta.setAttribute("content", dark ? "#0f0f13" : "#ffffff");
}

mq.addEventListener("change", updateThemeColor);
updateThemeColor(mq);
