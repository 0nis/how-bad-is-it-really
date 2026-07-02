export const style = /* CSS */ `
    .toggle {
        border: none;
        display: flex;
        flex-direction: row;
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        padding: 0.25rem;
        gap: 0.25rem;
    }

    .option {
        flex: 1;
        cursor: pointer;
    }
    .option input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding: 0.5rem 1rem;
        border-radius: calc(var(--r-md) - 2px);
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
        transition:
            background 0.15s,
            color 0.15s;
        user-select: none;
        height: 100%;
    }

    .option input:checked + .label {
        background: var(--bg-2);
        color: var(--text-primary);
    }
    .option:hover .label {
        color: var(--text-primary);
    }

    .label-icon {
        display: flex;
        align-items: center;
    }

    @media (max-width: 550px) {
        .toggle {
            flex-direction: column;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .label {
            transition: none;
        }
    }
`;
