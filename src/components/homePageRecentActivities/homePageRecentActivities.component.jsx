import React from 'react';

import ActivitiesImage1 from '../../assets/hack1.jpg';
 
import './homePageRecentActivities.styles.css';

const HomePageRecentActivities = () => (

    <div className='activities' id='activities-section'>
        <div className='title'>
            <h3>Recent Activities</h3>
        </div>
        <div className='section inverted'>
            <div className='image-div'>
                <img src={ActivitiesImage1} alt={'hackathon'}/>
            </div>
            <div className='text'>
                <h4>Hackathon : National Initiative for Design Innovation</h4>
                <p>
                    We, at Programming Club of NIT Jamshedpur, are a group of highly enthusiastic 
                    and dedicated individuals striving to spread algorithmic thinking to ignite the 
                    minds of the contemporary generation to Code for the Future. PCON consists of a 
                    diverse group which focuses on Competitive Coding, App and web design, Cloud Computing, 
                    Machine Learning and many more. If you think that the 
                    bits are the alphabets of the future, you are One of Us, spreading the gene-o-code all the way!
                </p>
            </div>
        </div>
        <div className='section'>
            <div className='image-div'>
            <img src={ActivitiesImage1} alt={'c programming workshop'}/>
            </div>
            <div className='text'>
                <h4>Workshop : Introduction to Programming with C</h4>
                <p>
                We, at Programming Club of NIT Jamshedpur, are a group of highly enthusiastic and 
                dedicated individuals striving to spread algorithmic thinking to ignite the minds 
                of the contemporary generation to Code for the Future. PCON consists of a diverse 
                group which focuses on Competitive Coding, App and web design, Cloud Computing, Machine 
                Learning and many more. If you think that the bits are the 
                alphabets of the future, you are One of Us, spreading the gene-o-code all the way!
                </p>
            </div>
        </div>
    </div>
);

export default HomePageRecentActivities;