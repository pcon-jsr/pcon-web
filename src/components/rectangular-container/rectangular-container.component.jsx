import React from 'react';
import './rectangular-container.styles.css';

const RectangularContainer = ({children}) => {
    return (
        <div className='rectangular' >
            {children}
            <div className='social-media'>
                     <a rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/pconjsr/' className="fa fa-facebook"> </a>
                     <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/company/pconjsr/'  className="fa fa-linkedin"> </a>
                     <a rel='noopener noreferrer' target='_blank' href='https://github.com/pcon-jsr'  className="fa fa-github"  > </a>
                     <a rel='noopener noreferrer' target='_blank' href='https://www.instagram.com/pconjsr'  className="fa fa-instagram"> </a>
                </div>
        </div>
    )
}

export default RectangularContainer;
