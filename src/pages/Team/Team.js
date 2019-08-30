import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Profile from './Profile';
// import MediaCard from './MediaCard';


export default class Team extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {
        return (
            <React.Fragment className="Team" style={{ marginTop: '5%', padding: '0', marginLeft: (window.innerWidth>=660)?'10%':'4%' }}>
                <div style={{ margin:'90px  auto 0 auto',}}>
                <h1>Team </h1>
                </div>
                <div className="jumbotrond" style={{backgroundColor:'transparent',}}>
                    <h2 style={{ marginTop: '1%',marginLeft:'%',textAlign:'center', }}><strong>Professor Incharge:</strong></h2>
                < div className = "row"
                    // style = {{ marginTop: '5%',  marginLeft: '%',} } 
                    >
                    
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{textAlign:'center',alignContent:'center',alignSelf:'center',}}>

                        <div  >
                          
                            < div className = "ui card"
                            style = {
                                {
                                    boxShadow: '2px 5px 10px #333',
                                }
                            } >
                            <div className=""
                            
                            ><img alt="" style={{width:'270px',height:'250px',}} src="http://nitjsr.ac.in/images/facultyphotos/CS15.jpg" /></div>
                            <div className="content">
                                <div className="header">Dr. Dilip Kumar</div>
                                        <div className="meta"><span className="date">Assistant Professor</span><br/>
                                            <span>(Department of Computer Science & Engineering)</span>
                                        </div>
                                {/* <div className="description">Matthew is a musician living in Nashville.</div> */}
                            </div>
                            <div style={{textAlign:'center',margin:'0 auto',}} className="extra content">
                                < a href = "http://nitjsr.ac.in/academics/departments/profile.php?user_id=CS15" >
                                {/* <i aria-hidden="true" className="user icon"></i> */}
                                    <button  class="ui violet inverted button">Visit Profile</button>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    </div>
                </div>  
                <hr/>
                {/* <h3 style={{ marginTop: '3%', marginLeft: '3%', }}><strong>Team Members:</strong></h3> */}
                <h3 style={{ textAlign: 'center', margin:'2% auto',}}><strong>Final Year</strong></h3>
                
                <div className="container">
                    <div className="row" style={{ marginLeft: (window.innerWidth>=660)?'9%':'1%', }} >
                   
                     <Profile
                        name = "Himesh"
                        post = "President"
                        git = "https://github.com/CHAMP221B"
                        linkedin="https://www.linkedin.com/in/himeshpatel619/"
                        fb="http://www.fb.com"
                        imgSrc="https://drive.google.com/uc?id=13-uLTDtGwc-QTV-9IL8SBe0u_r_HMDAZ"
                    />
                     <Profile
                        name = "Shubham"
                        post = "Technical Secretary"
                        git = " https://github.com/shubhamkr17"
                        linkedin="https://www.linkedin.com/in/shubhamkumara3/ "
                        fb = " https://www.facebook.com/profile.php?id=100006795335002"
                        imgSrc = "https://drive.google.com/uc?id=1KDSGKw3d595YZzuyP-37qZPCfz_D10lV"
                    />
                     <Profile
                        name = "Sanay"
                        post = "General Secretary"
                        git = "https://github.com/Saanayy"
                        linkedin = "https://www.linkedin.com/in/sanay-dev-817aa8147 "
                        fb = "https://www.facebook.com/Fake.aarav"
                        imgSrc = "https://drive.google.com/uc?id=1GGOBydTkMcwkA47rdCtQjOnhrLqGRKcX"
                    />
                     <Profile
                        name = "Chandan"
                        post = "Treasurer"
                        git = " https://github.com/chandancks"
                        linkedin = "https://www.linkedin.com/in/chandan-kumar-sharma-6b0221143/"
                        fb = "https://www.facebook.com/chandankumar.sharma.750"
                        imgSrc="https://drive.google.com/uc?id=1jIG_MGBJq3qNXniUqNHgOpmSjGUUo_jH"
                    />
                     <Profile
                        name = "Munish"
                        post = "Member"
                        git = "https://github.com/minki1616"
                        linkedin = "http://www.linkedin.com/in/munish-sharma-046206138"
                        fb = "https://m.facebook.com/donu1616 "
                        imgSrc = "https://drive.google.com/uc?id=114iADOLvFXON63wRt2oJUxGpEd5aSJeT"
                    />
                     <Profile
                        name = "Kanishka"
                        post = "Member"
                        git = " https://github.com/kanishka47"
                        linkedin = "https://www.linkedin.com/in/kanishka-singh-583091158"
                        fb = "https://www.facebook.com/kanishka.singh.7773"
                        imgSrc = "https://drive.google.com/uc?id=1PdKXCsA280WcXiQFq_kruroHYwFLeMvu"
                    />
                     <Profile
                        name = "Saif"
                        post="Member"
                        git = "https://github.com/Saif-Haider"
                        linkedin = "https://www.linkedin.com/in/saif-haider-a26109158"
                        fb = "https://www.facebook.com/saif.haider.54966834"
                        imgSrc = "https://drive.google.com/uc?id=11_U3Xg-i0qInJ8u7hdj31oS1Vrp0EmGN"
                    />
                    <Profile
                        name = "Bibhudhendra"
                        post="Member"
                        git = " https://github.com/bibhudhendra"
                        linkedin = "https://www.linkedin.com/in/bibhudhendra-pati-b05a0b150"
                        fb = "https://facebook.com/bibhudhendra.pati.71"
                        imgSrc = "https://drive.google.com/uc?id=13SYVndpMYDV7jfrLLuX87iSU5giQqV7k"
                    />
                    <Profile
                        name = "Anmol"
                        post="Member"
                        git = "https://github.com/anmol8797"
                        linkedin = "https://www.linkedin.com/in/anmol-gangwal-588638149"
                        fb = " https://www.facebook.com/anmol.gangwal.5"
                        imgSrc = "https://drive.google.com/uc?id=1zXmCDF5FH4N48rouILSSsUR7SDYRuFBx"
                    />
                    <Profile
                        name = "Naman"
                        post="Member"
                        git = "https://github.com/naman7kr"
                        linkedin = "https://www.linkedin.com/in/kumar-naman-55b356128"
                        fb = "https://www.facebook.com/kumar.naman.707 "
                        imgSrc = "http://drive.google.com/uc?id=1jnFktCsHQPLFfujBdh0T2-pOaDBmYfnR"
                    />
                    <Profile
                        name = "Adarsh"
                        post="Member"
                        git = "https://github.com/DevAdarshAnurag"
                        linkedin = "https://www.linkedin.com/in/adarsh-anurag-b7a0ba128"
                        fb = " https://m.facebook.com/a4adarshanurag"
                        imgSrc = "https://drive.google.com/open?id=1otCsore6isVuRCRp32vm2Wk5VuIobNne"
                    />
                    <Profile
                        name = "Harshit"
                        post="Member"
                        git = "https://github.com/harshitsaini22199"
                        linkedin = "https://www.linkedin.com/mwlite/me"
                        fb = "https://www.facebook.com/profile.php?id=100016904648130"
                        imgSrc = "https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"
                    />
                    <Profile
                        name = "Anirudh"
                        post="Member"
                        git = "https://github.com/anirudh1107"
                        linkedin = "https://www.linkedin.com/in/anirudh-deep-642863144"
                        fb = "https://www.facebook.com/anirudh.deep.5"
                        imgSrc = "https://drive.google.com/uc?id=1NEqDmxMYO-ZeVmfQTITZ0wxdAGDbK7eK"
                    />
                    <Profile
                        name = "Sairaj"
                        post="Member"
                        git = "https://github.com/sai9314"
                        linkedin = "https://www.linkedin.com/in/sairaj-nemmaniwar-4a5672146"
                        fb = "https://www.facebook.com/sairaj.nemmaniwar"
                        imgSrc = "https://drive.google.com/uc?id=198s5xwVYGax_7KsrZdpG07u_jxILxC3k"
                    />
                    <Profile
                        name = "Monu"
                        post="Member"
                        git = "https://github.com/monu044"
                        linkedin = "https://www.linkedin.com/mwlite/me"
                        fb = "https://m.facebook.com/monu.kumar.2646 "
                        imgSrc = "https://drive.google.com/uc?id=1WFlCDiABTDaLC-_YlpXqQatfw9htEgKf"
                    />
                    <Profile
                        name = "Suraj"
                        post="Member"
                        git = "https://github.com/shazz10"
                        linkedin = "https://www.linkedin.com/in/suraj-kumar-523459136"
                        fb = "#"
                        imgSrc = "https://drive.google.com/uc?id=19s1bKCFCFDRoWNdAYBPvgLqDDHa8Kz3C"
                    />
                    <Profile
                        name = "Mohit"
                        post="Member"
                        git = " https://github.com/mohitjha22 "
                        linkedin = "https://www.linkedin.com/in/mohit-jha-03a0b3149"
                        fb = " https://www.facebook.com/mohit.k.jha.5"
                        imgSrc = "https://drive.google.com/uc?id=1A1yS8JKfiEeRKWTzKMmKrZ2nRLuV3fJ1"
                    />
                    <div className="col-md-4"></div>
                          
                
                    

                    </div>
                  </div>  
                <br />
                <hr />
                <br />
                <div className="container">
                <h3 style={{ textAlign: 'center', marginLeft: '%' }}><strong>Pre-Final Year</strong></h3>
                    
                <div className="row" style={{ marginLeft: (window.innerWidth>=660)?'9%':'1%', }} >
                      
                     <Profile
                        name="Aditya Pratap"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Niraj Oswal"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Piyush Rai"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Vivek Sharma"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Abhinav Kinshuk"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Purusarth Verma"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Shantanu "
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                     <Profile
                        name="Abhinay Kumar"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Vaibhav Chandra"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Rohan Kumar"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Vikrant Kumar"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Amit Bahir"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Harshal Desai"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Mayank Kashyap"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name=" Arun Shrivastav"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Hashit Gupta"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Md. Ahteshmul Haque"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <Profile
                        name="Mrityunjay Kumar"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <div className="col-md-4"></div>
                    <Profile
                        name="Abhishek Sarwan"
                        post="Member"
                        git=""
                        linkedin=""
                        fb=""
                        imgSrc=""
                    />
                    <div className="col-md-4"></div>
                          
                   
                </div>
            
            </div>
            </React.Fragment>
        )
    }
}


