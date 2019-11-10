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
import Leader from './pages/leaderboard/leader';
import Gallery from './pages/gallery/gallery.page'; 
import SubmitInterviewExp from './pages/submit-interview-exp/submit-interview-exp.page.jsx';
import MessageBox from './components/message-box/message-box.component';

import { ReactComponent as EnvelopeIcon} from './assets/envelope-solid.svg';

class App extends React.Component{

  constructor(){
    
    super();
    this.state={
      expandSidebar: false,
      MessageBoxOpen:false
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
        expandSidebar: false,
        
      }
    )
  }

  

  render(){
       console.log('Y:' ,)
      return (
        <div className='App'>
            
            <Navbar closeSidebar={this.closeSidebar}  toggleSidebar={this.toggleSidebar} /> 
            { window.innerWidth >= 768
              ?<div className={`message-box-button ${this.state.MessageBoxOpen?'dark':null}`} onClick={()=>{this.setState({MessageBoxOpen: !this.state.MessageBoxOpen})}}>
                  <EnvelopeIcon style={{color:'#fff', width:'27px'}}/>
            </div>
            :null
            }
            {
              (this.state.MessageBoxOpen)? <MessageBox/> : null
            }
          
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
