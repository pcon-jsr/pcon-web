import React from 'react';
import { Route,Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Sidebar from './components/sidebar/sidebar.component';
import HomePage from './pages/home/home.page';
import Team from './pages/Team/Team';
import Interview from './pages/interview-exp/Interview';
import Footer from './components/footer/footer.component';
import Timeline from './pages/timeline/Timeline';
import Leader from './pages/leaderboard/leader';
import Gallery from './pages/gallery/gallery.page'; 


class App extends React.Component{

  constructor(){
    
    super();
    this.state={
      expandSidebar: false
    }
  }


  toggleSidebar = () => {
    this.setState(prevState => (
      {
        expandSidebar: !prevState.expandSidebar
      }
    ))
  }
 
  closeSidebar = () => {
    this.setState( 
      {
        expandSidebar: false
      }
    )
  }

  render(){
      return (
        <div className='App'>
            <Navbar closeSidebar={this.closeSidebar}  toggleSidebar={this.toggleSidebar} />
            
            <div className='container' onClick={() => this.setState({expandSidebar:false})}>
              <Sidebar expanded={this.state.expandSidebar} />
              <div className='content'>
                  
                  <Switch>
                      <Route exact path='/' component={HomePage} />
                      <Route exact path='/gallery' component={Gallery} /> 
                      <Route exact path='/team' component={Team} /> 
                      <Route exact path='/interview' component={Interview} />
                      <Route exact path='/achievements' component={Timeline} /> 
                      <Route exact path='/leaderboard' component={Leader} /> 
                      <Route exact path='/gallery' component={Gallery} /> 
                       
                  </Switch>
                
                
                    <Footer/>
              </div>
             
            </div>
            
        </div>
    );
  }
}

export default App;
