export const globalSheet = new CSSStyleSheet();

globalSheet.replaceSync(/* CSS */ `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: var(--font-body);
    background: var(--bg-0);
    color: var(--text-primary);
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
`);
