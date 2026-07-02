export const style = /* CSS */ `
    .context {
        margin-bottom: 1.5rem;
    }
    .context p {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--text-tertiary);
    }

    #sigma {
        text-align: center;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-tertiary);
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .divider {
        border: none;
        border-top: 1px solid var(--border-soft);
        margin: 1.5rem 0;
    }

    @media (max-width: 550px) {
        .context p {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 400px) {
        .context p {
            font-size: 0.6rem;
        }
    }
`;
