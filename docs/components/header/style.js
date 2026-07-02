export const style = /* CSS */ `
    header {
        text-align: center;
        padding-top: 1rem;
    }

    .top {
        display: grid;
        grid-template-columns: 1fr auto 1fr; 
        align-items: center;
        width: 100%;
    }

    .logo {
        grid-column: 2;
        justify-self: center;
        font-family: var(--font-mono);
        font-size: 2rem;
        color: var(--accent);
        letter-spacing: -0.03em;
        line-height: 1;
        margin-bottom: 0.75rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 0.9rem;
        color: var(--text-secondary);
        max-width: 480px;
        margin: 0 auto;
    }

    .actions {
        grid-column: 3;
        justify-self: end;
        display: flex;
        gap: 0.5rem;
    }
    .actions > * {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-sm);
        color: var(--text-primary);
        cursor: pointer;
        transition: border-color 0.15s;
        text-decoration: none;
    }
    .actions > *:hover {
        border-color: var(--accent-dim);
        color: var(--accent);
    }
    .actions svg {
        width: 18px;
        height: 18px;
    }
    .settings-trigger[aria-expanded="true"] {
        color: var(--accent);
        border-color: var(--accent-dim);
    }

    @media (prefers-reduced-motion: reduce) {
        .actions > * {
            transition: none;
        }
    }
`;
