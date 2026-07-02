export const style = /* CSS */ `
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;
        padding: 1.5rem 0 1rem;
        container-type: inline-size;
    }

    #label {
        font-family: var(--font-mono);
        font-size: clamp(2rem, 20cqw, 6rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1;
        transition: color 0.4s;
    }

    .severity-0 {
        color: var(--sev-0);
    }
    .severity-1 {
        color: var(--sev-1);
    }
    .severity-2 {
        color: var(--sev-2);
    }
    .severity-3 {
        color: var(--sev-3);
    }
    .severity-4 {
        color: var(--sev-4);
    }
    .severity-5 {
        color: var(--sev-5);
    }

    #frequency {
        font-size: 90%;
        color: var(--text-secondary);
    }

    #description {
        color: var(--text-primary);
    }

    @media (max-width: 550px) {
        #frequency {
            font-size: 85%;
        }

        #description {
            font-size: 90%;
        }
    }
`;
