import React from 'react';

import PconLogo from '../../assets/imageedit_1_9951625727.png';
import './homePageHeader.styles.css';

import ReactTypingEffect from 'react-typing-effect';

class HomePageHeader extends React.Component {

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
                    <ReactTypingEffect
                    className='animated-text'
                     text={["BUILD. BRAKE. CODE."]}
                    />

                </div>
            </div>
        )
    }
}

export default HomePageHeader;