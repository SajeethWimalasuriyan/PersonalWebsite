// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import '../PageStyles/Contact.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Slide from 'react-reveal/Slide';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Slide right duration="453">
    <div className="right-side-comp">
        <h3 className="contact-website-title">
            Contact Me
        </h3>
        <hr/>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xnqgldqp"
        method="POST"
        className="form-body"
      >
          
   
        <label>Email</label><br/>
        <input placeholder="Enter a valid email!" className="form-email" type="email" name="email" />
        <br/>
        <label>Message</label><br/>
        <input placeholder="Enter a short message!" className="form-message" type="text" name="message" /><br/>
        {status === "SUCCESS" ? <p>Thanks For The Message!</p> : <button className="home-container-left-about-button">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
     
      <div className="contact-user-prompt">
          <p>Dont want to use my form :( Try   
            <a href="mailto:sajeethwim2579@icloud.com?Subject=Hello%20Sajeeth"> emailing</a> or you could  <a href="sms:/4165753139/"> message</a> me!</p>
      </div>
      <div className="socials-contact">
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
      </div>
      </div>
      </Slide>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}