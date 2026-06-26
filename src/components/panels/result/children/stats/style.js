export const style = /* CSS */ `
    .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.65rem 1rem;
    }

    .stat-row {
        display: contents;
    }

    .stat-label {
        font-size: 0.8rem;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
    }

    .stat-value {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--text-primary);
        font-weight: 500;
        text-align: right;
    }
    `;
