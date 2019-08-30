import React from 'react';

import './otherPagesSection.styles.css';

import OtherPageCard from '../otherPageCard/otherPageCard.component';
import GalleryImage from '../../assets/cast.jpg';
import AchievementsImage from '../../assets/acheive.png';
import TeamImage from '../../assets/team.png';

const OtherPagesSection = ({changeRoute}) => (
    <div className='other-pages'>
         <OtherPageCard onClick={()=> changeRoute('gallery')} image={GalleryImage} text={'Gallery'}/>
         <OtherPageCard onClick={()=> changeRoute('achievements')} image={AchievementsImage} text = {'Achievements'}/>
         <OtherPageCard onClick={()=> changeRoute('team')} image={TeamImage} text = {'Team'}/>
    </div>
);

export default OtherPagesSection;
