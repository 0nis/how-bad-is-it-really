export const resetSheet = new CSSStyleSheet();

resetSheet.replaceSync(`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`);
