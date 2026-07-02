export const style = /* CSS */ `
    .wrapper {
        margin: 1rem 0 1.5rem;
    }

    .track {
        position: relative;
        height: 8px;
        background: var(--bg-2);
        border-radius: 99px;
        overflow: visible;
    }

    .bar {
        position: absolute;
        left: 50%;
        top: 0;
        height: 100%;
        width: 50%;
        transform-origin: left center;

        background: var(--gauge-color, var(--text-primary));
        border-radius: 99px;

        transition:
            transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
            background 0.4s ease;
    }

    .marker {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: var(--text-primary);
        border: 2px solid var(--bg-1);
        border-radius: 50%;
        transition: left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: 2;
    }

    .labels {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: var(--text-tertiary);
    }

    @media (prefers-reduced-motion: reduce) {
        .bar,
        .marker {
            transition: none;
        }
    }
`;
