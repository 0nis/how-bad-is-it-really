export const panelSheet = new CSSStyleSheet();

panelSheet.replaceSync(`
    .panel {
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        padding: 2rem;
    }
`);
