import React, { Component } from 'react'
import axios from 'axios'
import Slide from 'react-reveal/Slide';

export class Stats extends Component {
    constructor() {
        super();
        this.state = {
            gitData:""};
    
      }
    gitpull = () =>{
        axios.get('https://api.github.com/users/SajeethWimalasuriyan')
        .then(data => {
            this.setState({gitData: data.data});
        })
    }
    componentDidMount(){
        this.gitpull();
    }
    render() {
        return (
            <Slide right duration="453">
            <div className="right-side-comp">
                <h3> Statistics</h3>
                <h5>Github</h5>
                <p style={{backgroundColor: "#f8f8f8", padding: "19px"}} className="c1"><span className="stats-left">Public Repositories</span><span className="stats-right">{this.state.gitData.public_repos}</span></p>
                <p style={{backgroundColor: "#ffffff", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Gists</span><span className="stats-right">{this.state.gitData.public_gists}</span></p>
                <p style={{backgroundColor: "#f8f8f8", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Followers</span><span className="stats-right">{this.state.gitData.followers}</span></p>
                <p style={{backgroundColor: "#ffffff", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Following</span><span className="stats-right">{this.state.gitData.following}</span></p>
                <p style={{backgroundColor: "#f8f8f8", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Day Joined</span><span className="stats-right">{this.state.gitData.created_at}</span></p>
                <h5>About Website</h5>
                 <p style={{backgroundColor: "#f8f8f8", padding: "19px"}}><span  className="stats-left">Lines of code powering site</span><span className="stats-right">2780</span></p>
                 <p style={{backgroundColor: "#ffffff", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Last Updated</span><span className="stats-right">July 25, 2020</span></p>
                 <p style={{backgroundColor: "#f8f8f8", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Development Hours</span><span className="stats-right">7 Hours</span></p>
                 <p style={{backgroundColor: "#ffffff", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Https Requests Made</span><span className="stats-right">2</span></p>
                 <p style={{backgroundColor: "#f8f8f8", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Known Bugs</span><span className="stats-right">0 </span></p>
                 <p style={{backgroundColor: "#ffffff", padding: "19px", marginTop: "-17px"}}><span  className="stats-left">Deployments</span><span className="stats-right">34 </span></p>

            </div>
            </Slide>
        )
    }
}

export default Stats
