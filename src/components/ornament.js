import React from "react"

// Two mirrored wheat ears, used above section headings
const Ear = ({flip}) => (
    <g transform={flip ? `translate(100 0) scale(-1 1)` : undefined}>
        <path d="M2 12 H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {[10, 18, 26, 34].map(x => (
            <g key={x} fill="currentColor">
                <ellipse cx={x} cy="8.5" rx="4" ry="2" transform={`rotate(-30 ${x} 8.5)`}/>
                <ellipse cx={x} cy="15.5" rx="4" ry="2" transform={`rotate(30 ${x} 15.5)`}/>
            </g>
        ))}
        <ellipse cx="41" cy="12" rx="4" ry="2" fill="currentColor"/>
    </g>
);

const Ornament = () => (
    <svg className="ornament" width="100" height="24" viewBox="0 0 100 24" aria-hidden="true">
        <Ear/>
        <Ear flip/>
    </svg>
);

export default Ornament
