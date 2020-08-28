import React, { Component } from 'react'
import '../PageStyles/HomePage.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Projects from './Projects';
import Home from './Home';
import Resume from './Resume';
import { animateScroll }from 'react-scroll';
import Contact from './Contact';
import Stats from './Stats';
import Link from '@material-ui/core/Link';
import portrait from '../Photos/meback.png'
import Slide from 'react-reveal/Slide';

export class HomePage extends Component {
    constructor(){
        super();
        var needToScroll = false;
    }
    scrollToBottom = () => {
        animateScroll.scrollTo(1420);
    }
    componentDidUpdate(){
        if (this.props.volontaryClick && window.innerWidth < 800){
            this.scrollToBottom();
        }
        
    }
    portswitcher = () => {
        this.needToScroll = true;
        if (this.props.userChoice == 1){
            
            return <Home></Home>
            
        }
        else if (this.props.userChoice == 2){
         
            return <Resume></Resume>
        }
        else if (this.props.userChoice == 3){
         
            return <Projects></Projects>
        }
        else if (this.props.userChoice == 4){
         
            return <Stats></Stats>
        }
        else if (this.props.userChoice == 5){
         
            return <Contact></Contact>
        }
        
       
    }
 
    render() {
        return (
            <div>
               <div className="home-container">
               <Slide left>
                   <div className="home-container-left">
                       <img className="home-container-left-image" src={portrait} alt="Self Portrait of Me"></img>
                      <h2 className="home-container-left-name">Sajeeth Wimalasuriyan</h2> 
                      <p className="home-container-left-email">sajeethwim2579@icloud.com</p>
                      <hr className="breaker"/>
                      <h4 className="home-container-left-about">About</h4>
                      <p className="home-container-left-about-text">Hi, I'm Sajeeth. I am a avid programmer and a student at the university of Toronto. I currently study computer science and information systems. I enjoy learning about new technology everyday and I can code in languages like Java, Python, HTML, CSS and JavaScript.</p>
                    <a href="https://github.com/SajeethWimalasuriyan" className="home-container-left-about-atag"> See More </a>
                    <hr className="custom-line"/>
                    <Link className="remove-the-blue" href="mailto:sajeethwim2579@icloud.com?Subject=Hello%20Sajeeth" >
                    <MailOutlineIcon className="about-socials"/>
                    </Link>
                    <Link className="remove-the-blue" href="https://github.com/SajeethWimalasuriyan" >

                    <GitHubIcon className="about-socials"/>
                    </Link>
                    <Link className="remove-the-blue" href="https://www.instagram.com/wimalasuriyan/" >

                    <InstagramIcon className="about-socials"/>
                    </Link>
                    <Link className="remove-the-blue" href="https://twitter.com/wimalasuriyan?lang=en" >

                    <TwitterIcon className="about-socials"/>
                    </Link>
                    <Link className="remove-the-blue" href="https://www.linkedin.com/public-profile/in/sajeeth-wimalasuriyan-0063b8164/?originalSubdomain=ca&challengeId=AQHse2JEnH8stwAAAXOCAJPDuNODUuuvc7VuRw_BJm9pzKfDmL5RNLuxDQiNvqhiHTekRHBZ8uRYHaZ_Saj05MqErMLc9KPC9Q&submissionId=50198438-6dc2-2416-849e-98125660e55f" >

                    <LinkedInIcon className="about-socials"/>
                    </Link>
                    <div class="skills">
                        <div className="skill-graph">
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "95%"}} >
                        <span class="per">HTML: 95%</span>
                    </div>
                </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "95%"}} >
                        <span class="per">CSS: 95%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "90%"}} >
                        <span class="per">JavaScript: 90%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "90%"}} >
                        <span class="per">React: 90%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "90%"}} >
                        <span class="per">Redux: 90%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "50%"}} >
                        <span class="per">Node.js: 50%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "70%"}} >
                        <span class="per">Express.js: 70%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "80%"}} >
                        <span class="per">Java: 80%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "85%"}} >
                        <span class="per">Python: 85%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "100%"}} >
                        <span class="per">Arcpy: 100%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "75%"}} >
                        <span class="per">GIS: 75%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "30%"}} >
                        <span class="per">C: 30%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "95%"}} >
                        <span class="per">Git: 95%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "95%"}} >
                        <span class="per">Agile/Scrum: 95%</span>
                    </div>
                    </Slide>
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "95%"}} >
                        <span class="per">Technical Documentation: 95%</span>
                    </div>
                    </Slide>
                
                </div>
                <div className="bar_flex">
                <Slide left>
                    <div id="g1" className="bar_fill" style={{width: "65%"}} >
                        <span class="per">Firebase: 65%</span>
                    </div>
                    </Slide>
                
                </div>
                </div>
                
            </div>
                   </div>
                </Slide>
                <Slide right>
                   <div className="home-container-right">
                   
                    {
                       this.portswitcher()
                   }
                  
                   </div>
                   </Slide>
                 
                   </div> 
            </div>
        )
    }
}

export default HomePage
