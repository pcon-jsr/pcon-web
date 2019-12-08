import React from 'react';
import {Link} from 'react-router-dom';

import './sidebar.styles.css';

import  {ReactComponent as GithubIcon}  from '../../assets/github-square-brands.svg';
import {ReactComponent as SlackIcon} from '../../assets/slack-brands.svg';
import {ReactComponent as ActivitiesIcon} from '../../assets/calendar-alt-solid.svg';
import {ReactComponent as LeaderboardIcon} from '../../assets/trophy-solid.svg';
import {ReactComponent as InterviewIcon} from '../../assets/user-tie-solid.svg';
import {ReactComponent as GalleryIcon} from '../../assets/gallery-icon.svg';
import {ReactComponent as TeamIcon} from '../../assets/team-icon.svg';
import {ReactComponent as AchievementsIcon} from '../../assets/star-solid.svg';

class Sidebar extends React.Component{

    state={
        expandedDueToHover: false,
        yPosition: window.pageYOffset,
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
        
        return (
            <div 
            style={{
                opacity: (window.innerWidth >=768 && window.location.hash === '#/') ? (this.state.yPosition > 0  ? 1 : 0.2 ) : 1,
                visibility: (window.innerWidth >=768 && window.location.hash === '#/') ? (this.state.yPosition > 0  ? 'visible' : 'hidden' ) : 'visible',
            }}
                className={`sidebar ${this.props.expanded || this.state.expandedDueToHover?'expand':'contract'}`} 
               
                onMouseEnter={() => {
                    if(this.props.expanded){
                        return;
                    }

                    this.setState({expandedDueToHover:true});
                }}
                onMouseLeave={() => {
                    if(this.props.expanded){
                        return;
                    }

                    this.setState({expandedDueToHover:false});
                }}
            >
                
                <Link to='/activities' className='menu-item'>
                    <div className='icon-div'>
                         <ActivitiesIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <Link to='/activities'><span>Activities</span></Link>
                        </div>
                    </div>
                </Link>
                <Link to='/leaderboard' className='menu-item'>
                    <div className='icon-div'>
                         <LeaderboardIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <Link to='/leaderboard'><span>Leaderboard</span></Link>
                        </div>
                    </div>
                </Link>
                
                <Link to='/interview' className='menu-item'>
                     
                    <div className='icon-div'>
                         <InterviewIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <span>Interview Experience</span> 
                        </div>
                    </div>
                </Link>
                <Link to='/achievements' className='menu-item'>
                     
                     <div className='icon-div'>
                          <AchievementsIcon className='my-icon'/>
                     </div>
                     <div className='text-div'>
                         
                         <div className='text'>
                             <span>Achievements</span> 
                         </div>
                     </div>
                 </Link>
                <Link to='/gallery' className='menu-item'>
                     
                    <div className='icon-div'>
                         <GalleryIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <span>Gallery</span> 
                        </div>
                    </div>
                </Link>
                <Link to='/team' className='menu-item'>
                     
                    <div className='icon-div'>
                         <TeamIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <span>Team</span> 
                        </div>
                    </div>
                </Link>
                <div className='menu-item'>
                    <div className='icon-div'>
                     <a className='my-icon' target='_blank' rel='noopener noreferrer' href='https://github.com/pcon-jsr'>
                        <GithubIcon />
                        </a>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/pcon-jsr'><span> GitHub Repositories</span></a>
                        </div>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='icon-div'>
                        <a className='my-icon' target='_blank' rel='noopener noreferrer' href='https://join.slack.com/t/pcon-nitjsr-workspace/shared_invite/enQtNDI4MTEwNTg1MzMzLTlhZGQ2YzA0Y2QwMzA4YTQzNmYxNWRjMmQ3MTIwYWI1MGQ0N2MwNTFkZmMxZjA1YTM4ZjUxZmZiN2MzZmFiYzI'> 
                            <SlackIcon />
                        </a>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <a target='_blank' rel='noopener noreferrer' href='https://join.slack.com/t/pcon-nitjsr-workspace/shared_invite/enQtNDI4MTEwNTg1MzMzLTlhZGQ2YzA0Y2QwMzA4YTQzNmYxNWRjMmQ3MTIwYWI1MGQ0N2MwNTFkZmMxZjA1YTM4ZjUxZmZiN2MzZmFiYzI'><span> Discussions - Slack</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;