import React from 'react';

import ActivitiesImage1 from '../../assets/hack1.jpg';

import InductionsInterviewImage from '../../assets/induction-interview.png';

import './homePageRecentActivities.styles.css';

const HomePageRecentActivities = () => (

    <div className='activities' id='activities-section'>
        <div className='title'>
            <h3>Recent Activities</h3>
        </div>
        <div className='section inverted'>
            <div className='image-div'>
            <img src={InductionsInterviewImage}  alt={'inductions'}/>
            </div>
            <div className='text'>
                <h4>Inductions : 2017 and 2018 batch</h4>
                <p>
                The Programming Club of NIT Jamshedpur recently concluded with its induction procedure. The interest and effort you all put in, which was reflected in the huge number of participants, left us all overwhelmed. The team now has onboard members for second, third and fourth years who aim to establish a healthy coding culture in the campus, reaching every student passionate about coding. 

                </p>
            </div>
        </div>
        <div className='section '>
            <div className='image-div'>
                <img src={ActivitiesImage1}  alt={'hackathon'}/>
            </div>
            <div className='text'>
                <h4>Hackathon : National Initiative for Design Innovation</h4>
                <p>
                A design sprint-like event was conducted by PCON, under close observation of the Ministry of Human Resource Development (MHRD). NIT Jamshedpur conducts a day-long hackathon wherein more than 150 participants compete to exhibit their calibre. Students from all streams and domains participated to provide their solution to the problem statement posed using a wide tech-stack.

This was an attempt to improve the students' participation towards such events and bring real-life problem solving skills into students. 

                </p>
            </div>
        </div>
        
    </div>
);

export default HomePageRecentActivities;