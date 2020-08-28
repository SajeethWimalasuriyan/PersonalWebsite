import React, { Component } from 'react'
import "../PageStyles/Resume.css"
import Slide from 'react-reveal/Slide';

export class Resume extends Component {
    render() {
        return (
          <Slide right duration="453">
            <div className="right-side-comp">
               
              <h3>Resume</h3>
              <hr/>
                <section>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="bottom" class="aos-init aos-animate">
                  <h4>Experience<span class="zim">:</span></h4>
                  <h6>University of Toronto | ROP | May 2020 - Sep 2020</h6>
                  <p><span class="zim">•</span>Programmed an ArcGIS-based toolbox to implement the daily activity locations (DAL) k-anonymity using Python (ArcPy).</p>
                  <p><span class="zim">•</span>Implemented complex algorithms and OOP techniques to implement modular and scalable code.   </p>
  
                  <h6> Revo Health | Front End Developer | May 2019 - Sep 2019</h6>
                  <p><span class="zim">•</span>Worked in an Agile environment with a small team to design and implement the front end of a new medical web app.</p>
                  <p><span class="zim">•</span>Extensively used HTML, CSS, and JavaScript to implement a given design. I also used Git to collaborate and limited amounts of jQuery.</p>
  
                  <h6>The Directory Guys | Customer Support/IT | June 2018 - Aug 2018</h6>
                  <p><span class="zim">•</span>Edited HTML email templates and sent out the necessary emails to customers.</p>
                  <p><span class="zim">•</span>Helped customers choose the appropriate form of digital advertising. </p>
                </div>
            
                <div data-aos="zoom-in-up" class="aos-init aos-animate">

                  <h4>Technical Projects<span class="zim">:</span></h4>
                  <h6>Meme Review</h6>
                  <p><span class="zim">•</span>	Built a React application using the Imgflip API (RESTful/JSON interface), Bootstrap, and Material-UI. I also created a custom API using Node.js, Firebase Realtime Database, and Firebase Functions. </p>
                  <p><span class="zim">•</span>	Meme Review is a social media platform that is centered around memes and rating them. A user can view global posts and the most popular memes. Once a user is logged in they can then post and comment/rate other memes.</p>
                  <h6>YouTube Clone</h6>
                  <p><span class="zim">•</span>Built a React application using the YouTube API, React Hooks, Axios and Google Firebase.</p>
                  <p><span class="zim">•</span>The application allows a user to search for videos, view the trending page and see other information associated with a YouTube video.  </p>
               
                  <h6>  Sorting Algorithm Visualizer</h6>
                  <p><span class="zim">•</span>Built an application using HTML, CSS, and Javascript which visually shows the sorting process of several in-place algorithms.</p>
                  <p><span class="zim">•</span>Implemented Heap Sort, Quick Sort, Selection Sort and Bubble Sort. </p>
  
                 
                  </div>
                  <div data-aos="zoom-in-up" class="aos-init aos-animate">

                  <h4>Volunteer Work<span class="zim">:</span></h4>
                  <h6> Community Church | Website Administrator  | Nov 2017 – May 2018 </h6>
                  <p><span class="zim">•</span>Helped a teacher administrate their community church's Wix website and send out weekly newsletters through Mailchimp.</p>
  
                  <h6>Brampton Library | Library Assistant | May 2014 – Sep 2016 </h6>
                  <p><span class="zim">•</span>Helped to organize books and assisted people with general questions.</p>
                  </div>
                </section>
                <section>
                <h4>Technical Skills<span class="zim">:</span></h4>
                <ul class="skill-set">
                  <li data-aos="flip-right" class="bset aos-init aos-animate">JavaScript (ES6)</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">HTML5</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">CSS3</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">React</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Redux</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Firebase</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Node.js (Express)</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Material UI</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Arcpy</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">HTTP Requests (RESTful API)</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">JSON</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Java</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Python</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Git</li>
                  <li data-aos="flip-right" class="bset aos-init">Bootstrap</li>
                  <li data-aos="flip-right" class="bset aos-init">jQuery</li>


                </ul>
              </section>
              <section>
                <h4>Software Experience<span class="zim">:</span></h4>
                <ul class="skill-set">
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Visual Studio Code</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Microsoft Office Suite</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">PyCharm</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">IntelliJ IDEA</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Eclipse</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">ArcGIS Pro</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Jira</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">ArcMap</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Adobe Photoshop</li>
                  <li data-aos="flip-right" class="bset aos-init aos-animate">Android Studio</li>
                </ul>
              </section>
              
            </div>
            </Slide>
        )
    }
}

export default Resume
