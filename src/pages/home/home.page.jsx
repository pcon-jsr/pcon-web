import React from "react";

import "./home.styles.css";
import HomePageHeader from "../../components/homePageHeader/homePageHeader.component";
// import HomePageAbout from '../../components/homePageAbout/homePageAbout.component';
// import HomePageRecentActivities from '../../components/homePageRecentActivities/homePageRecentActivities.component';
// import OtherPagesSection from '../../components/otherPagesSection/otherPagesSection.component';
import RectangularContainer from "../../components/rectangular-container/rectangular-container.component";
import HomePageSection from "../../components/homePageSection/homePageSection.component";
import HighlightsSection from "../../components/highlightsSection/highlightsSection";

class HomePage extends React.Component {
  changeRoute = (text) => {
    this.props.history.push(`/${text}`);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log("Home:", this.props);
    return (
      <div className="home">
        <HomePageHeader />
        <RectangularContainer>
          <HomePageSection>
            <h2>Who Are We?</h2>
            <p>
              We, at Programming Club of NIT Jamshedpur, are a group of highly
              enthusiastic and dedicated individuals striving to spread
              algorithmic thinking to ignite the minds of the contemporary
              generation to Code for the Future. PCON consists of a diverse
              group which focuses on Competitive Coding, App and web design,
              Cloud Computing, Machine Learning and many more. If you think that
              the bits are the alphabets of the future, you are One of Us,
              spreading the gene-o-code all the way!
            </p>
          </HomePageSection>
          <HomePageSection grey>
            <h2>About the Institute</h2>
            <p>
              <b>National Institute of Technology, Jamshedpur</b>, earlier known as
              Regional Institute of Technology was established on 15th August
              1960 as a joint venture of Government of India and the Government
              of Bihar in the chain of REC's (Regional Engineering College) in
              India with the aim to generate technical graduates of highest
              standards who could provide technological leadership to the
              region. It was among the first eight Regional Engineering Colleges
              (RECs) established as part of the Second Five-Year Plan (1956 -
              1961). This was the only REC in the country which was named as RIT
              (Regional Institute of Technology). Therefore RIT Jamshedpur was
              actually the REC of undivided Bihar & Jharkhand. The foundation
              stone of RIT (REC) Jamshedpur was laid by Dr. Srikrishna Sinha,
              the then chief minister of Bihar , with the aim of nurturing
              talent and setting high standards of education and excellence.
              <br/>
            </p>
          </HomePageSection>
          <HomePageSection>
            <h2>Highlights</h2>
            <HighlightsSection/>
          </HomePageSection>
          {/* <HomePageAbout />
                    <HomePageRecentActivities />
                    <OtherPagesSection changeRoute={this.changeRoute} /> */}
        </RectangularContainer>
      </div>
    );
  }
}

export default HomePage;
