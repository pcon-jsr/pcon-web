import React from 'react';

import './home.styles.css';
import HomePageHeader from '../../components/homePageHeader/homePageHeader.component';
import HomePageAbout from '../../components/homePageAbout/homePageAbout.component';
import HomePageRecentActivities from '../../components/homePageRecentActivities/homePageRecentActivities.component';
import OtherPagesSection from '../../components/otherPagesSection/otherPagesSection.component';
import RectangularContainer from '../../components/rectangular-container/rectangular-container.component';



class HomePage extends React.Component {

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
                <HomePageHeader />
                <RectangularContainer>
                    <HomePageAbout />
                    <HomePageRecentActivities />
                    <OtherPagesSection changeRoute={this.changeRoute} />
                </RectangularContainer>

            </div>
        )
    }
}

export default HomePage;