import React from 'react';

import AboutImage from '../../assets/home_pic.jpg';

import './homePageAbout.styles.css';

const HomePageAbout = () => (
    <div className='about' id='about-section'>
        <div className='title'>
            <span>"Code never lies, comments sometimes do."</span>
        </div>
        <div className='content'>
            <div className='image-div'>
                <img src={AboutImage} alt={'About'}/>
            </div>
            <div className='text'>
                <h3>
                  Who are we?
                </h3>
                <p>
                    We, at Programming Club of NIT Jamshedpur, are a group of highly enthusiastic and 
                    dedicated individuals striving to spread algorithmic thinking to ignite the minds of the 
                    contemporary generation to Code for the Future. PCON consists of a diverse group which 
                    focuses on Competitive Coding, App and web design, Cloud Computing, Machine Learning and 
                    many more. If you think that the bits are the alphabets of the future, you are One of Us,
                    spreading the gene-o-code all the way!
                </p>
            </div>
        </div>
    </div>
);

export default HomePageAbout;