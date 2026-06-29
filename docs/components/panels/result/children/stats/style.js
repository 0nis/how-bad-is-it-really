export const style = /* CSS */ `
    .stats-card {
        padding: 0.75rem;
        border-radius: 12px;
        background: var(--bg-1);
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr 1fr;
        gap: 0.4rem 0.75rem;
        font-size: 0.85rem;
    }

    .row {
        display: contents;
    }

    .row > div {
        padding: 0.25rem 0;
    }

    .header {
        color: var(--text-secondary);
        font-size: 0.75rem;
    }

    .positive {
        color: #ff6b6b;
    }

    .negative {
        color: #4dabf7;
    }
`;
