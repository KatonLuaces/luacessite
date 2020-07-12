import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Externals } from "./Externals";
type HeaderProps = {
  name?: string;
};

type HeaderState = {
  displayWork: boolean;
  displayProjects: boolean;
  displaySchool: boolean;
  displayPerformances: boolean;
  displayPrimaryInterest: boolean;
  displayHobbies: boolean;
  displayJuggling: boolean;
  displayExternals: boolean;
};

const WorkIcons = (
  <React.Fragment>
    <ReactTooltip />
    <img
      data-tip="Google"
      alt="Google"
      className="Company-icon"
      src="google_logo.svg"
    ></img>
    <img
      data-tip="Spectator Publishing Company"
      alt="Spectator Publishing Company"
      className="Company-icon"
      src="spec_logo_3.png"
    ></img>
    <img
      data-tip="Contrast Optical"
      alt="Contrast Optical"
      className="Company-icon"
      src="contrast.png"
    ></img>
  </React.Fragment>
);

//    <img data-tip="The Center for Civic Policy" className="Company-icon" src="ccp_logo_2.png"></img>

const ProjectIcons = (
  <React.Fragment>
    <ReactTooltip />
    <img
      data-tip="The City  Of Albuquerque Municipal Government"
      alt="The City  Of Albuquerque Municipal Government"
      className="Company-icon"
      src="cabq_logo.png"
    ></img>
    <img
      data-tip="The National Hispanic Cultural Center"
      alt="The National Hispanic Cultural Center"
      className="Company-icon"
      src="nhcc-logo.png"
    ></img>
    <img
      data-tip="Qworks"
      alt="Qworks"
      className="Company-icon"
      src="qworks_logo.png"
    ></img>
  </React.Fragment>
);

const PerformanceImages = (
  <div className="Performances-container">
    <img className="Performance-image" alt="" src="sabor-1.jpg" />
    <img className="Performance-image" alt="" src="sabor-2.jpg" />
  </div>
);

const backgroundStyles: React.CSSProperties = {
  backgroundRepeat: "no-repeat",
};

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
    displayExternals: false,
  };

  componentDidMount() {
    this.getColor.bind(this);
  }

  showWork = () => {
    this.setState({ displayWork: true });
  };

  showProjects = () => {
    this.setState({ displayProjects: true });
  };

  showSchool = () => {
    this.setState({ displaySchool: true });
  };

  showPerformances = () => {
    this.setState({ displayPerformances: true });
  };

  showPrimaryInterest = () => {
    this.setState({ displayPrimaryInterest: true });
  };

  showHobbies = () => {
    this.setState({ displayHobbies: true });
  };

  showJuggling = () => {
    this.setState({ displayJuggling: true });
  };

  showExternals = () => {
    this.setState({ displayExternals: true });
  };

  getColor = (activated: boolean): React.CSSProperties => {
    let color = activated ? "white" : "coral";
    let style: React.CSSProperties = {
      color: color,
      transition: ".5s",
    };
    return style;
  };

  render() {
    return (
      <header className="App-header">
        <div className="Main" style={backgroundStyles}>
          <div className="Content-container">
            <h1 className="name"> Katon Luaces</h1>
            {this.state.displayExternals ? (
              <Externals
                linkedinURL="https://www.linkedin.com/in/katon-luaces/"
                githubURL="https://github.com/KatonLuaces"
              />
            ) : (
              <React.Fragment />
            )}

            <ul>
              <li>
                I spend most of my time on
                <span
                  style={this.getColor(this.state.displaySchool)}
                  onClick={this.showSchool}
                >
                  {" "}
                  school{" "}
                </span>
                ,
                <span
                  style={this.getColor(this.state.displayWork)}
                  onClick={this.showWork}
                >
                  {" "}
                  work{" "}
                </span>
                , and
                <span
                  style={this.getColor(this.state.displayProjects)}
                  onClick={this.showProjects}
                >
                  {" "}
                  other projects
                </span>
              </li>
              <li>
                I am from Albuquerque, where I developed most of my
                <span
                  style={this.getColor(this.state.displayHobbies)}
                  onClick={this.showHobbies}
                >
                  {" "}
                  hobbies{" "}
                </span>
              </li>
              {this.state.displaySchool ? (
                <li>
                  I am a student at Columbia University studying Computer
                  Science with a focus on
                  <span
                    style={this.getColor(this.state.displayPrimaryInterest)}
                    onClick={this.showPrimaryInterest}
                  >
                    {" "}
                    Intelligent Systems{" "}
                  </span>{" "}
                </li>
              ) : (
                <React.Fragment />
              )}
              {this.state.displayPrimaryInterest ? (
                <li>
                  I am interested in how artificial intelligence techniques can
                  improve decision making and our understanding of social
                  phenomenon
                </li>
              ) : (
                <React.Fragment />
              )}
              {this.state.displayHobbies ? (
                <React.Fragment />
              ) : (
                //<li>I <span style={this.getColor(this.state.displayJuggling)} onClick={this.showJuggling}> throw stuff </span> in an orderly fashion from time to time</li>
                <React.Fragment />
              )}
              {this.state.displayHobbies ? (
                <li>
                  I like to
                  <span
                    style={this.getColor(this.state.displayPerformances)}
                    onClick={this.showPerformances}
                  >
                    {" "}
                    dance{" "}
                  </span>{" "}
                  - especially salsa, bachata and merengue
                </li>
              ) : (
                <React.Fragment />
              )}
            </ul>
          </div>
          <div className="Icons-container">
            {this.state.displayWork || this.state.displayProjects ? (
              <p>
                Where I've gotten my{" "}
                <span
                  style={this.getColor(this.state.displayExternals)}
                  onClick={this.showExternals}
                >
                  {" "}
                  experience{" "}
                </span>{" "}
              </p>
            ) : (
              <p />
            )}
            {this.state.displayWork ? WorkIcons : <div />}
            {this.state.displayProjects ? ProjectIcons : <div />}
          </div>
        </div>
        {this.state.displayPerformances ? (
          PerformanceImages
        ) : (
          <React.Fragment />
        )}
      </header>
    );
  }
}
