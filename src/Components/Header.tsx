import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
type HeaderProps = {
    name?: string
}

type HeaderState = {
    displayWork: boolean;
    displayProjects: boolean;
    displaySchool: boolean;
    displayPerformances: boolean;
    displayPrimaryInterest: boolean;
    displayHobbies: boolean;
    displayJuggling: boolean
}

const mappleConfig = {
    direction:'left',
    mappleType: 'contra',
    fadeInAnimation: false,
    tipPosition: 50
}

const WorkIcons = 
  <React.Fragment>   
    <ReactTooltip/> 
    <p>Where I've gotten my experience</p>   
    <img data-tip="Google" className="Company-icon" src="google_logo.svg"></img>
    <img data-tip="Spectator Publishing Company" className="Company-icon" src="spec_logo_3.png"></img>
    <img data-tip="Contrast Optical" className="Company-icon" src="contrast.png"></img>
    </React.Fragment>

const ProjectIcons = 
  <React.Fragment>  
    <ReactTooltip/>
    <img data-tip="The City  Of Albuquerque Municipal Government" className="Company-icon" src="cabq_logo.png"></img>
    <img data-tip="The Center for Civic Policy" className="Company-icon" src="ccp_logo_2.png"></img>
    <img data-tip="Qworks" className="Company-icon" src="qworks_logo.png"></img>
  </React.Fragment>

const PerformanceImages = 
    <React.Fragment>  
        <img  className="Performance-image" src="sabor-1.jpg"/>
        <img  className="Performance-image" src="sabor-2.jpg"/>
    </React.Fragment>

const backgroundStyles: React.CSSProperties = {
    backgroundRepeat: "no-repeat",
}



//Code, comfortaa, or MuseoModerno display typeface with raleway for text typeface
export class Header extends Component<HeaderProps, HeaderState> {
    readonly state = {
        displayWork: false,
        displayProjects: false,
        displaySchool: false,
        displayPerformances: false,
        displayPrimaryInterest: false,
        displayHobbies: false,
        displayJuggling: false,
    };

    componentDidMount(){
        this.getColor.bind(this);
    }

    showWork = () => { this.setState({displayWork: true})}

    showProjects = () => {this.setState({displayProjects: true})}

    showSchool  = () => {this.setState({displaySchool: true})}
    
    showPerformances  = () => {this.setState({displayPerformances: true})}

    showPrimaryInterest = () => {this.setState({displayPrimaryInterest: true})}

    showHobbies = () => {this.setState({displayHobbies: true})}

    showJuggling = () => {this.setState({displayJuggling: true})
}
    getColor = (activated: boolean): React.CSSProperties => {
        let color = activated ? "white" : "coral"
        let style: React.CSSProperties = {
            color: color,
            transition: ".5s",
        }
        return style;
    }

    render(){
        return(
        <header className="App-header" >
        <div className="Main" style={backgroundStyles}>

        <div className="Content-container">
          <h1>Katon Luaces</h1>
         <ul>
          <li>I spend most of my time on 
                <span style={this.getColor(this.state.displaySchool)} onClick={this.showSchool}> school </span>, 
                <span style={this.getColor(this.state.displayWork)} onClick={this.showWork}> work </span>, and 
                <span style={this.getColor(this.state.displayProjects)} onClick={this.showProjects}> other projects</span></li>
          <li>I am from Albuquerque, where I developed most of my
              <span style={this.getColor(this.state.displayHobbies)} onClick={this.showHobbies}> hobbies </span></li>
          {this.state.displaySchool ? <li>I am a student at Columbia University studying Computer Science with a focus on
              <span style={this.getColor(this.state.displayPrimaryInterest)} onClick={this.showPrimaryInterest}> Intelligent Systems </span> </li> : <React.Fragment/>}
          {this.state.displayPrimaryInterest ? <li>I am interested in how artificial intelligence techniques can improve decision making and our understanding of social phenomenon</li> : <React.Fragment/>}
          {this.state.displayHobbies ? <li>I  
              <span style={this.getColor(this.state.displayJuggling)} onClick={this.showJuggling}> throw stuff </span> in an orderly fashion from time to time</li> : <React.Fragment/>}
          {this.state.displayHobbies ? <li>I like to 
              <span style={this.getColor(this.state.displayPerformances)} onClick={this.showPerformances} > dance </span> - especially salsa, bachata and merengue</li> : <React.Fragment/>}
         </ul> 
         </div>
        <div className="Icons-container">
          {this.state.displayWork ? WorkIcons : <div/>}
          {this.state.displayProjects ? ProjectIcons : <div/>}
        </div>
         </div>
         <div className="Performances-container">
          {this.state.displayPerformances ? PerformanceImages : <React.Fragment/>}
        </div>
        </header>
        
        )
    }

}
    