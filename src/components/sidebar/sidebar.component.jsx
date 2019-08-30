import React from 'react';
import {Link} from 'react-router-dom';

import './sidebar.styles.css';

import  {ReactComponent as GithubIcon}  from '../../assets/github-square-brands.svg';
import {ReactComponent as SlackIcon} from '../../assets/slack-brands.svg';
import {ReactComponent as ActivitiesIcon} from '../../assets/calendar-alt-solid.svg';
import {ReactComponent as LeaderboardIcon} from '../../assets/trophy-solid.svg';
import {ReactComponent as InterviewIcon} from '../../assets/user-tie-solid.svg';

class Sidebar extends React.Component{

   

    render() {
        
        return (
            <div className={`sidebar ${this.props.expanded?'expand':'contract'}`}>
                
                <Link to='/activities' className='menu-item'>
                    <div className='icon-div'>
                         <ActivitiesIcon className='my-icon'/>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <Link><span>Activities</span></Link>
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
                <div className='menu-item'>
                    <div className='icon-div'>
                     <a className='my-icon' target='_blank' href='https://github.com/pcon-jsr'>
                        <GithubIcon />
                        </a>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <a target='_blank' href='https://github.com/pcon-jsr'><span> GitHub Repositories</span></a>
                        </div>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='icon-div'>
                        <a className='my-icon' target='_blank' href='https://join.slack.com/t/pcon-nitjsr-workspace/shared_invite/enQtNDI4MTEwNTg1MzMzLTlhZGQ2YzA0Y2QwMzA4YTQzNmYxNWRjMmQ3MTIwYWI1MGQ0N2MwNTFkZmMxZjA1YTM4ZjUxZmZiN2MzZmFiYzI'> 
                            <SlackIcon />
                        </a>
                    </div>
                    <div className='text-div'>
                        
                        <div className='text'>
                            <a target='_blank' href='https://join.slack.com/t/pcon-nitjsr-workspace/shared_invite/enQtNDI4MTEwNTg1MzMzLTlhZGQ2YzA0Y2QwMzA4YTQzNmYxNWRjMmQ3MTIwYWI1MGQ0N2MwNTFkZmMxZjA1YTM4ZjUxZmZiN2MzZmFiYzI'><span> Discussions - Slack</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;