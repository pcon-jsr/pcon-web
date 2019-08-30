import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import './profile.css';
export default class Profile extends Component {
    render() {
        
        return (
            <React.Fragment>
            <div className="col-md-4">
                            < div class = "ui card profile"
                            style = {
                                {
                                    textAlign: 'center',
                                    marginBottom: '5%',
                                    // boxShadow: '2px 5px 10px #333',
                                }
                            } >
                            < div class = "image"
                            style = {
                                {
                                    width : "250px",
                                    height :"150px",
                                    borderRadius: '50%',
                                    background: 'white',
                                    margin: '25px auto',
                                    zIndex:'',
                                }
                            } >
                            < img alt=""
                                
                                style = {
                                    {   margin:'0 auto',
                                            borderRadius: '50%',
                                        boxShadow: '2px 5px 10px #123',
                                        width: '150px',
                                        height:'150px',
                                    }
                                }
                                src={this.props.imgSrc} />
                            </div>
                        <div class="content">
                            <div class="header">{this.props.name}</div>
                            <div style={{textAlign:'center',margin:'0 auto',}} class="meta">{this.props.post}</div>
                            {/* <div class="description">
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his
                            cat.
                            </div> */}
                        </div>
                        <div class="extra content" >
                            <ul style={{textDecoration:'none',listStyleType:'none',}}>
                            
                                <li style={{display:'inline-block'}}><a href={this.props.git}>
                            <i style={{fontSize:'35px',margin:'3%',}} class="fa fa-github-square" aria-hidden="true"></i>
                            </a></li>

                           <li style={{display:'inline-block'}}> <a href={this.props.linkedin}>
                            <i style={{fontSize:'35px',margin:'3%',}} class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            </li>
                         <li style={{display:'inline-block'}}> <a href={this.props.fb}>
                            <i style={{fontSize:'35px',margin:'3%',}} class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a> 
                                    </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                     </React.Fragment>
        )
    }
}
