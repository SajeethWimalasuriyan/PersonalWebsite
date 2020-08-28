import React, { Component } from 'react'
import '../PageStyles/Home.css'
import Slide from 'react-reveal/Slide';

export class Home extends Component {
    render() {
        return (
            <Slide right duration="453">
            <div className="right-side-comp">
                <h3 className="about-website-title">About This Website</h3>
                <p className="about-website-description">A Modern Website that runs on any platform written in modern JavaScript, HTML and CSS </p>
                <hr></hr>
                <p className="about-website-moredescription">Thanks for visiting my website. You can view and explore many facets about me on here such as my resume, cool facts and contact me.</p>
                <p className="about-website-github">Github can be found <a href="#">here</a>.</p>
            </div>
            </Slide>
        )
    }
}

export default Home
