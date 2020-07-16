import React from 'react';
import './highlightCard.styles.css';

const highlightCard = ({ content }) => {
    return (
        <div className="highlight-card">
            <h3>{content}</h3>
        </div>
    );
}

export default highlightCard;
