import React, { Component } from 'react';
type ExternalsProps = {
    linkedinURL?: string,
    githubURL?: string,
    emailAddress?: string
}

export class Externals extends Component<ExternalsProps> {
    render(){
        return(
            <div className="external-wrapper">
                {this.props.linkedinURL ? <a  href={this.props.linkedinURL} className="external-link">LN</a> : <React.Fragment/>}
                {this.props.githubURL ? <a href={this.props.githubURL} className="external-link">GH </a> : <React.Fragment/>}
                {this.props.emailAddress ? <a className="external-link">Email Me</a> : <React.Fragment/>}
            </div>
        )
    }

}
    