export const style = /* CSS */ `
    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 15, 19, 0.6);
        backdrop-filter: blur(2px);
        z-index: 200;
        animation: fade-in 0.18s ease;
    }
    
    @keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    .panel {
        position: fixed;
        top: 0;
        right: 0;
        height: 100dvh;
        width: min(360px, 100vw);
        background: var(--bg-1);
        border-left: 1px solid var(--border);
        z-index: 201;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        overflow-y: auto;
        
        transform: translateX(100%);
        transition: transform 0.22s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .panel.is-open {
        transform: translateX(0);
    }
    
    @media (max-width: 480px) {
        .panel { width: 100vw; }
    }
    
    .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-soft);
    }
    
    .panel-title {
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: -0.01em;
    }
    
    .reset-btn {
        background: none;
        border: none;
        color: var(--text-tertiary);
        font-family: var(--font-body);
        font-size: 0.8rem;
        cursor: pointer;
        padding: 0.25rem 0;
        transition: color 0.15s;
    }
    .reset-btn:hover {
        color: var(--accent);
    }
    
    .section {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
    
    .section-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .hint {
        font-size: 0.75rem;
        color: var(--text-tertiary);
        line-height: 1.5;
    }
    
    .segmented-control {
        display: flex;
        background: var(--bg-2);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        padding: 0.25rem;
        gap: 0.25rem;
    }
    
    .segmented-option {
        flex: 1;
        cursor: pointer;
    }
    
    .segmented-option input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .segmented-option span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.45rem 0.5rem;
        border-radius: calc(var(--r-md) - 3px);
        font-size: 0.825rem;
        font-weight: 500;
        color: var(--text-secondary);
        transition: background 0.15s, color 0.15s;
        user-select: none;
        text-align: center;
    }
    
    .segmented-option input:checked + span {
        background: var(--accent);
        color: #0f0f13;
    }
    
    .segmented-option:hover input:not(:checked) + span {
        color: var(--text-primary);
    }
    
    .slider-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    
    .slider-value {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
        font-weight: 600;
        white-space: nowrap;
    }
    
    .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 99px;
        background: var(--bg-2);
        outline: none;
        cursor: pointer;
    }
    
    .slider::-webkit-slider-thumb {
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
    
    .slider::-webkit-slider-thumb:hover {
        transform: scale(1.15);
    }
    
    .slider::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--accent);
        border: 2px solid var(--bg-1);
        box-shadow: 0 0 0 1px var(--border);
        cursor: pointer;
    }
    
    .slider::-moz-range-track {
        height: 4px;
        border-radius: 99px;
        background: var(--bg-2);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .panel, .overlay {
            transition: none;
            animation: none;
        }
    }
`;
