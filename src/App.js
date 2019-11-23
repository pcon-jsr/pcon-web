import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import Sidebar from './components/sidebar/sidebar.component';
import HomePage from './pages/home/home.page';
import Team from './pages/Team/Team';
import Interview from './pages/interview-exp/Interview';
import Footer from './components/footer/footer.component';
import Timeline from './pages/timeline/Timeline';
// import Leader from './pages/leaderboard/leader';
import Gallery from './pages/gallery/gallery.page'; 
import SubmitInterviewExp from './pages/submit-interview-exp/submit-interview-exp.page.jsx';
import MessageBox from './components/message-box/message-box.component';

import { ReactComponent as EnvelopeIcon} from './assets/envelope-solid.svg';

import { ReactComponent as BellIcon } from './assets/bell-regular.svg';
import NotificationBox from './components/notification-box/notification-box.component';

import Activities from './pages/activities/Activities';

class App extends React.Component{

  constructor(){
    
    super();
    this.state={
      expandSidebar: false,
      MessageBoxOpen:false,
      notificationBoxOpen:false
    }

   
  }


  toggleSidebar = () => {
    this.setState(prevState => (
      {
        expandSidebar: !prevState.expandSidebar
      }
    ))
  }

  toggleNotificationBox = () => {
    this.setState(prevState => (
      {
        notificationBoxOpen: !prevState.notificationBoxOpen
      }
    ))
  }
 
  closeSidebar = () => {
    this.setState( 
      {
        expandSidebar: false,
        
      }
    )
  }

  

  render(){
      
      return (
        <div className='App'>
            
            <BellIcon className='hidden-notification-icon' onClick={this.toggleNotificationBox}/>
            <Navbar closeSidebar={this.closeSidebar}  toggleSidebar={this.toggleSidebar} toggleNotificationBox={this.toggleNotificationBox} /> 
            { window.innerWidth >= 768
              ?<div className={`message-box-button ${this.state.MessageBoxOpen?'dark':null}`} onClick={()=>{this.setState({MessageBoxOpen: !this.state.MessageBoxOpen})}}>
                  <EnvelopeIcon style={{color:'#fff', width:'27px'}}/>
            </div>
            :null
            }
            {
              (this.state.MessageBoxOpen)? <MessageBox  /> : null
            }
          
            <div className='container' onClick={() => this.setState({expandSidebar:false, MessageBoxOpen:false, notificationBoxOpen:false})}>
              <Sidebar expanded={this.state.expandSidebar} />
              {this.state.notificationBoxOpen? <NotificationBox/>:null}
              <div className='content'>
                  
                  <Switch>
                      <Route exact path='/' component={HomePage} />
                      <Route exact path='/gallery' component={Gallery} /> 
                      <Route exact path='/team' component={Team} /> 
                      <Route exact path='/interview' component={Interview} />
                      <Route exact path='/achievements' component={Timeline} /> 
                      <Route exact path='/activities' component={Activities}/>
                      <Route exact path='/submit-interview-experience' component={SubmitInterviewExp}/>
                       
                  </Switch>
                
                
                  <Footer/> 
              </div>
             
            </div>
            
        </div>
    );
  }
}

export default App;
