import React from 'react';
import './highlightsSection.styles.css';

import HighlightCard from '../highlightCard/highlightCard';


const highlights = [
    {
        text: 'hackathons',
    },
    {
        text: 'coding contests',
    },
    {
        text: 'quizzes',
    },
    {
        text: 'bootcamps',
    }
];

const highlightsSection = () => {
    return (
        <div className="highlights-section">
            {
                highlights.map(hl => {
                    return (
                        <HighlightCard content={hl.text}/>
                    );
                })
            }
        </div>
    );
}

export default highlightsSection;
