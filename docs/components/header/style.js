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

    .settings-trigger {
        grid-column: 3;
        justify-self: end;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-sm);
        color: var(--text-secondary);
        cursor: pointer;
        transition: color 0.15s, border-color 0.15s, transform 0.4s ease;
    }
    
    .settings-trigger:hover {
        color: var(--text-primary);
        border-color: var(--accent-dim);
    }
    
    .settings-trigger:active {
        transform: scale(0.94);
    }
    
    .settings-trigger[aria-expanded="true"] {
        color: var(--accent);
        border-color: var(--accent-dim);
    }
    
    .settings-trigger[aria-expanded="true"] svg {
        transform: rotate(45deg);
        transition: transform 0.3s ease;
    }
    .settings-trigger svg {
        transition: transform 0.3s ease;
    }

    @media (prefers-reduced-motion: reduce) {
        .settings-trigger svg {
            transition: none;
            animation: none;
        }
    }
`;
