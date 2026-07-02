export const style = /* CSS */ `
    .stats {
        padding: 0.75rem;
        border-radius: 12px;
        background: var(--bg-1);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
    }

    table col:first-child {
        width: 40%;
    }

    table th,
    table td {
        padding: 0.25rem 0;
    }

    table thead {
        color: var(--text-secondary);
        font-size: 90%;
    }
    table thead th {
        text-transform: uppercase;
        letter-spacing: 0.09em;
        font-weight: 600;
        font-size: 90%;
        color: var(--text-tertiary);
    }
    table thead th:not(.metric) {
        text-align: right;
    }

    table th {
        text-align: left;
        font-weight: inherit;
    }

    table td {
        text-align: right;
        white-space: nowrap;
    }

    table td .value {
        font-variant-numeric: tabular-nums;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        text-align: right;
    }
    table td .value.na {
        color: var(--text-tertiary);
        font-size: 90%;
    }
    table td .unit.na {
        display: none;
    }

    table td .unit {
        display: inline-block;
        min-width: 2ch;
        font-size: 90%;
        margin-left: .1rem;
    }

    table tbody th {
        font-size: 95%;
    }

    @media (max-width: 550px) {
        table {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 400px) {
        table {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 340px) {
        table {
            font-size: 0.65rem;
        }
    }
`;
