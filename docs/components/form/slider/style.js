export const style = /* CSS */ `
    #container {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    
    output {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
        font-weight: 600;
        white-space: nowrap;
    }
    
    input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 99px;
        background: var(--bg-2);
        outline: none;
        cursor: pointer;
    }
    
    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--accent);
        border: 2px solid var(--bg-1);
        box-shadow: 0 0 0 1px var(--border);
        cursor: pointer;
        transition: transform 0.1s;
    }
    
    input::-webkit-slider-thumb:hover {
        transform: scale(1.15);
    }
    
    .input::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--accent);
        border: 2px solid var(--bg-1);
        box-shadow: 0 0 0 1px var(--border);
        cursor: pointer;
    }
    
    input::-moz-range-track {
        height: 4px;
        border-radius: 99px;
        background: var(--bg-2);
    }
`;
