import React from 'react';

import './home.styles.css';
import HomePageHeader from '../../components/homePageHeader/homePageHeader.component';
import HomePageAbout from '../../components/homePageAbout/homePageAbout.component';
import HomePageRecentActivities from '../../components/homePageRecentActivities/homePageRecentActivities.component';
import OtherPagesSection from '../../components/otherPagesSection/otherPagesSection.component';

class HomePage extends React.Component{

    changeRoute = (text) => {

        this.props.history.push(`/${text}`);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        console.log('Home:', this.props)
        return (
            <div className='home'>
                <HomePageHeader/>
                 <HomePageAbout />
                 <HomePageRecentActivities/>
                 <OtherPagesSection changeRoute={this.changeRoute} />
                 
                
            </div>
        )
    }
}

export default HomePage;