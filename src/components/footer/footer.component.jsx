import React from 'react';
import {Link} from 'react-router-dom';
 

import './footer.styles.css';

class Footer extends React.Component{
    
    render() {
        return (
            <div className='footer'>
                
                <div className='links'>
                    <Link to='/'><h4>HOME</h4></Link>
                    <Link to='/activities'><h4>ACTIVITIES</h4></Link>

                </div>
                <div className='credits'>
                    <p>Made with ❤ by <Link>PCON WEB TEAM</Link></p>
                </div>
            </div>
        )
    }
}

export default Footer;