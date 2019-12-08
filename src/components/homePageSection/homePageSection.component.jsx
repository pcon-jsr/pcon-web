import React from 'react';
import './homePageSection.styles.css';

const HomePageSection = ({children,grey}) => {
    return (
        <div className={`home-page-section ${grey?'grey':'white'}`}>
            {children}
        </div>
    )
}

export default HomePageSection;
