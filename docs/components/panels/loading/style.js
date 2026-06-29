export const style = /* CSS */ `
    .inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
        text-align: center;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .note {
        font-size: 0.8rem;
        color: var(--text-tertiary);
    }

    .spinner {
        width: 36px;
        height: 36px;
        border: 3px solid var(--border);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .spinner {
            animation: none;
        }
    }
`;
