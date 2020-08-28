import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuIcon from '@material-ui/icons/Menu';
import HomePage from './Pages/HomePage';
import logo from './Photos/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import progress from './Photos/loadingblack.gif'

const styles = {
    navBar: {'top': AppBar.height}
  }
export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
        open: false,
      optionChoice: 3,
    volClick: false,
    render: true
  };
    
      }
      componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: false}) //After 1 second, set render to true
        }.bind(this), 1600)
      }
      handleChoice = (x) =>{
        this.setState({optionChoice:x, volClick:true})
        this.handleToggle()
      }
      handleToggle = () => this.setState({open: !this.state.open});
    render() {
      //this.state.render is what u use in below conditional for load screen
        return (
          false ? (
<div className="loading-bar">
          <img className="loading-bar-logo" src={logo}></img><br/>
          <img className="loading-bar-logo-gif"src={progress}></img>
       
        </div>
          ): (
            <div>
            <MuiThemeProvider>
   
    <div className="main-navbar">
      <div className="navbar-top-left">
      <MenuIcon className="navbar-hamburger" onClick={this.handleToggle}></MenuIcon>
      <p className="navbar-name">Sajeeth Wimalasuriyan</p>
      </div>
     
      <Drawer
        open={this.state.open}
        width={200}
        containerStyle={styles.navBar}>
        <MenuItem onClick={()=>this.handleChoice(3)}>Projects</MenuItem>
        <MenuItem onClick={()=>this.handleChoice(1)}>About Website</MenuItem>
        <MenuItem onClick={()=>this.handleChoice(2)}>Resume</MenuItem>
        <MenuItem onClick={()=>this.handleChoice(4)}>Stats</MenuItem>
        <MenuItem onClick={()=>this.handleChoice(5)}>Contact</MenuItem>
      </Drawer>
    </div>
  </MuiThemeProvider> 
  <HomePage userChoice={this.state.optionChoice} volontaryClick={this.state.volClick}></HomePage>
        </div>
          )
           
        )
    }
}

export default Navbar
