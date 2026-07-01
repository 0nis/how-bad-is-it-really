export const style = /* CSS */ `
    :host {
        align-self: flex-end;
    }

    button {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        background: transparent;
        border: 1px solid var(--accent-dim);
        border-radius: var(--r-sm);
        padding: 0.4rem 0.9rem;
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--accent);
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.15s, border-color 0.15s;
    }
    
    button:hover {
        background: var(--accent-glow);
        border-color: var(--accent);
    }

    button:active {
        transform: scale(0.97);
    }

    button:disabled {
        color: var(--text-tertiary);
        border-color: var(--border);
        cursor: not-allowed;
    }

    button:disabled:hover {
        background: transparent;
    }

    @media (prefers-reduced-motion: reduce) {
        button {
            transition: none;
        }
    }
`;
