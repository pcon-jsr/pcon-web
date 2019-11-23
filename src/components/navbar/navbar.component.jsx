import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/bars-solid.svg';
import { ReactComponent as BellIcon } from '../../assets/bell-solid.svg';

import './navbar.styles.css';

class Navbar extends React.Component{

    constructor(){
        super();
        this.state={
            yPosition:  window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
    
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          yPosition: scrolled,
        })
      }

    render() {
        //console.log('Navbar:', this.props)
        return (
            
            <div className='navbar' style={{
                visibility: (window.innerWidth >=768 && window.location.hash === '#/') ? (this.state.yPosition > 0  ? 'visible' : 'hidden' ) : 'visible'
            }}>
                <div className='toggle-icon-div' onClick={this.props.toggleSidebar}>
                    <MenuIcon className='menu-icon'/>
                </div>
                <Link to='/' style={{textDecoration:'none',color:'white'}} onClick={this.props.closeSidebar} className='pcon-home-btn'>
                    <span>PCON </span>
                </Link>
                <div className='notification-btn' onClick={this.props.toggleNotificationBox}>
                    <div className='notification-icon'>
                        <BellIcon className='bell-icon'/>
                    </div>
                    <div className='text' >
                        <span>NOTIFICATIONS</span>
                    </div>
                    
                </div>
            </div>
             
        )
    }
}

export default Navbar;