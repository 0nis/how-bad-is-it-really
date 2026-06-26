export const style = /* CSS */ `
    #suggestions {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--bg-1);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        list-style: none;
        z-index: 100;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 0.75rem 1rem;
        cursor: pointer;
        border-bottom: 1px solid var(--border-soft);
        transition: background 0.1s;
    }
    .item:last-child {
        border-bottom: none;
    }
    .item:hover,
    .item:focus {
        background: var(--bg-2);
        outline: none;
    }

    .primary {
        font-size: 0.95rem;
        font-weight: 500;
    }
    .secondary {
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
`;
