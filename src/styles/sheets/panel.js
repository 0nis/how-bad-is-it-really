export const panelSheet = new CSSStyleSheet();

panelSheet.replaceSync(/* CSS */ `
    .panel {
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        padding: 2rem;
    }

    @media (max-width: 520px) {
        .panel {
            padding: 1.5rem;
        }
    }
`);
