import React, { Component } from 'react'
import '../PageStyles/Projects.css';
import Slide from 'react-reveal/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import memereview from '../Photos/memereview.png'
import memereview2 from '../Photos/memereview2.png'
import memereview3 from '../Photos/memereview3.png'
import memereview4 from '../Photos/memereview4.png'
import memereview5 from '../Photos/memereview5.png'
import memereview6 from '../Photos/memereview6.png'
import memereview7 from '../Photos/memereview7.png'
import yt from '../Photos/yt.png'
import yt2 from '../Photos/yt2.png'
import yt3 from '../Photos/yt3.png'
import sort from '../Photos/sort.png'
import sort2 from '../Photos/sort2.png'
import sort3 from '../Photos/sort3.png'
import trivia from '../Photos/trivia.png'
import trivia2 from '../Photos/trivia2.png'
import trivia3 from '../Photos/trivia3.png'
import dalk from '../Photos/dalk.png'
import dalk2 from '../Photos/dalk2.png'
import dalk3 from '../Photos/dalk3.png'
import dalk4 from '../Photos/dalk4.png'







export class Projects extends Component {
    render() {
        return (
            <Slide right duration="453">
            <div className="right-side-comp" >
                
                <h2>Projects</h2>
                <hr/>
                <Slide bottom duration="300"> 
                <div className="project">
                <div className="banner">
                    <h6 className="project-name">DAL K-Anonymity</h6>
                    <p className="project-date">Summer, 2020</p>
    
                </div>
               
                <Carousel  infiniteLoop='true'>
                <div>
                    <img className="project-picture" src={dalk}/>
                    <p className="legend">Website</p>
                </div>
             
                <div>
                 <img className="project-picture" src={dalk3}/>
                    <p className="legend">Tool Running</p>
                </div>
                <div>
                 <img className="project-picture" src={dalk4}/>
                    <p className="legend">Algorithm Process</p>
                </div>
               
            </Carousel >
                <div className="project-discription">
                    <p className="project-description-text">Programmed an ArcGIS-based toolbox to implement daily activity locations
(DAL) k-anonymity using Python (ArcPy).
Implemented an algorithm to detect points of interest based on GPS data. The time spent, location, and other auxiliary information are collected and compared to a user-provided 'masked' spatial dataset to see how protected/encrypted the data is based on the DALK equation. <a href="https://sajeethwimalasuriyan.github.io/DALKWebsite/"> Want to see it?</a></p>
                </div>
                </div>
                </Slide>
                <Slide bottom duration="300"> 
                <div className="project">
                <div className="banner">
                    <h6 className="project-name">Meme Review</h6>
                    <p className="project-date">Summer, 2020</p>
    
                </div>
                <Carousel  infiniteLoop='true'>
                <div>
                    <img className="project-picture" src={memereview}/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview2}/>
                    <p className="legend">Home Page 2</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview3}/>
                    <p className="legend">Trending Page</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview4}/>
                    <p className="legend">Search Page</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview5}/>
                    <p className="legend">Login</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview6}/>
                    <p className="legend">Create Account</p>
                </div>
                <div>
                 <img className="project-picture" src={memereview7}/>
                    <p className="legend">Post Meme</p>
                </div>
            </Carousel>
                
                <div className="project-discription">
                    <p className="project-description-text">Meme Review is a social media platform that is centered around memes and rating them. A user can view global posts and the most popular memes. Once a user is logged in they can then 
                    post and comment/rate other memes.This front end is built with React, Redux, Bootstrap, and Material-UI. I also created a custom backend API using Node.js, Firebase Realtime Database, Firebase Functions and the Imgflip API (RESTful/JSON interface). <a href="https://react-social-2b464.web.app/">Want to see it?</a>
</p>
                </div>
                </div>
                </Slide>
                <Slide bottom duration="300"> 
                <div className="project">
                <div className="banner">
                    <h6 className="project-name">Endless Trivia</h6>
                    <p className="project-date">January, 2020</p>
    
                </div>
               
                <Carousel  infiniteLoop='true'>
                <div>
                    <img className="project-picture" src={trivia}/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                 <img className="project-picture" src={trivia2}/>
                    <p className="legend">Categories</p>
                </div>
                <div>
                 <img className="project-picture" src={trivia3}/>
                    <p className="legend">Gameplay</p>
                </div>
               
            </Carousel>
                <div className="project-discription">
                    <p className="project-description-text">Trivvvia is a trivia website with several categories and an online component that keeps track of the top 10 scores worldwide. The website is created using React and makes requests to a JSON API using Axios (HTTPS Requests). <a href="https://react-trivia-6bf75.web.app/"> Want to see it?</a></p>
                </div>
                </div>
                </Slide>


                <Slide bottom duration="300"> 
                <div className="project">
                <div className="banner">
                    <h6 className="project-name">Youtube Clone</h6>
                    <p className="project-date">Decemember, 2019</p>
    
                </div>
               
                <Carousel  infiniteLoop='true'>
                <div>
                    <img className="project-picture" src={yt}/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                 <img className="project-picture" src={yt3}/>
                    <p className="legend">User Search</p>
                </div>
                <div>
                 <img className="project-picture" src={yt2}/>
                    <p className="legend">Comments</p>
                </div>
               
            </Carousel>
                <div className="project-discription">
                    <p className="project-description-text">Built a React application using the YouTube API, React Hooks, Axios and Google Firebase. The application allows a user to search for videos, view the trending page and see other information associated with a YouTube video.<a href="https://react-263203.firebaseapp.com/"> Want to see it?</a></p>
                </div>
                </div>
                </Slide>


            
              

                <Slide bottom duration="300"> 
                <div className="project">
                <div className="banner">
                    <h6 className="project-name">Sorting Algorithm Visualizer</h6>
                    <p className="project-date">Summer, 2019</p>
    
                </div>
               
                <Carousel  infiniteLoop='true'>
                <div>
                    <img className="project-picture" src={sort}/>
                    <p className="legend">Instructions</p>
                </div>
                <div>
                 <img className="project-picture" src={sort2}/>
                    <p className="legend">Unsorted Data</p>
                </div>
                <div>
                 <img className="project-picture" src={sort3}/>
                    <p className="legend">Sorted Data</p>
                </div>
               
            </Carousel>
                <div className="project-discription">
                    <p className="project-description-text">Built an application using HTML, CSS, and Javascript which visually shows the sorting process of several in-place algorithms. Implemented Heap Sort, Quick Sort, Selection Sort and Bubble Sort. <a href="https://sajeethwimalasuriyan.github.io/Sorting-Algorithm-Visualizer/"> Want to see it?</a></p>
                </div>
                </div>
                </Slide>



                
            
            </div>
            </Slide>
        )
    }
}

export default Projects
