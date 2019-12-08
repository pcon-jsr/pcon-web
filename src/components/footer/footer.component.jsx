import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as HeartIcon} from '../../assets/heart-solid.svg';

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
                    <p style={{display:'flex',alignItems:'center'}}>Made with 
                         
                            <HeartIcon style={{
                            color:'red',
                            width:'30px',
                            margin:'0px 4px 0 4px'
                            }}/>
                         
                    by
                    &nbsp;
                    <Link>PCON WEB TEAM</Link></p>
                </div>
            </div>
        )
    }
}

export default Footer;