import React from 'react';
import './rectangular-container.styles.css';

import Particles from 'react-particles-js';


const RectangularContainer = ({ children }) => {
    return (

        <div className='rectangular-container'>

            <div className='rectangular' >

                {children}
                <div className='social-media'>
                    <a rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/pconjsr/' className="fa fa-facebook"> </a>
                    <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/company/pconjsr/' className="fa fa-linkedin"> </a>
                    <a rel='noopener noreferrer' target='_blank' href='https://github.com/pcon-jsr' className="fa fa-github"  > </a>
                    <a rel='noopener noreferrer' target='_blank' href='https://www.instagram.com/pconjsr' className="fa fa-instagram"> </a>
                </div>
            </div>
            <Particles
                className="my-particle-bg"
                params={{

                    "particles": {
                        "number": {
                            "value": 360,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
        </div>
    )
}

export default RectangularContainer;
