import React from 'react';
import {Link} from 'react-router-dom';
 
import { ReactComponent as MapPointerIcon } from '../../assets/map-marker-alt-solid.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-alt-solid.svg';
import { ReactComponent as EmailIcon } from '../../assets/envelope-solid.svg';

import './footer.styles.css';

class Footer extends React.Component{
    
    render() {
        return (
            <div className='footer'>
                <div className='pcon'>
                    <div className='title'>
                        <span>
                             Programming Club of NITJSR
                        </span>
                    </div>
                    <div className='links'>
                        <Link to='/'><span style={{color:'white'}}> Home </span></Link>
                        <span> <a target='_blank' href='http://www.nitjsr.ac.in/' style={{color:'white'}}>NIT JSR </a></span>
                    </div>
                    <div className='copyright-text'>
                        <span>PCON-JSR © 2019</span>
                    </div>
                </div>
                <div className='contact'>
                    <div className='name'>
                        <div className='icon'>
                            <MapPointerIcon className='footer-icon'/>
                        </div>
                        <div className='text'>
                            <span>
                                National Institute of Technology
                            </span>
                            <span>
                                Jamshedpur
                            </span>
                        </div>
                       
                    </div>
                    <div className='phone'>
                        <div className='icon'>
                            <PhoneIcon className='footer-icon'/>
                        </div>
                        <div className='text'>
                            <span>  +91 8709144698 </span>
                        </div>
                        
                         
                    </div>
                    <div className='email'>
                        <div className='icon'>
                            <EmailIcon className='footer-icon'/>
                        </div>
                        <div className='text'>
                            <span>pcon@nitjsr.ac.in</span>
                        </div>
                        
                    </div>
                </div>
                <div className='social-media'>
                     <a target='_blank' href='https://www.facebook.com/pconjsr/' className="fa fa-facebook"> </a>
                     <a target='_blank' href='https://www.linkedin.com/company/pconjsr/'  className="fa fa-linkedin"></a>
                     <a target='_blank' href='https://github.com/pcon-jsr'  className="fa fa-github"  ></a>
                     <a target='_blank' href='https://www.instagram.com/pconjsr'  className="fa fa-instagram"></a>
                </div>
            </div>
        )
    }
}

export default Footer;