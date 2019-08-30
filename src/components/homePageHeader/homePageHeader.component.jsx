import React from 'react';

import PconLogo from '../../assets/imageedit_1_9951625727.png';
import './homePageHeader.styles.css';

class HomePageHeader extends React.Component{

    render() {
        return (
            <div className='header'>
                <div className='logo-div'>
                     <img 
                        alt='PCON Logo' 
                        src={PconLogo}
                    />
                </div>
                <div className='header-text'>
                    <h2>Programming Club of NIT Jamshedpur</h2>
                    <h4>#be_the_disrupt!</h4>
                </div>
            </div>
        )
    }
}

export default HomePageHeader;