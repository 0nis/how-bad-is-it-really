export const style = /* CSS */ `
    :host {
        display: flex;
        justify-content: center;
    }

    #context {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: .3rem;
        margin-top: 2rem;
        width: 80%;
    }

    #context p {
        font-size: 0.75rem;
        color: var(--text-tertiary);
    }

    #context .important {
        color: var(--text-secondary);
    }

    @media (max-width: 400px) {
        #context p {
            font-size: 0.7rem;
        }
    }
`;
