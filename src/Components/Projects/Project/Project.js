import React from 'react';
import "./Project.css";

//Images
import Link from "../../../assets/icons/link.png";
import Github from "../../../assets/icons/github.png";

export default class Project extends React.Component
{
    getGithub(props)
    {
        if (!props.github)
            return ;
        return (
            <a target="_blank" href={props.github}>
                <img src={Github} alt='git'/>
            </a>
        );
    }

    getLink(props)
    {
        if (!props.link)
            return ;
        return (
            <a target="_blank" href={props.link}>
                <img src={Link} alt='link'/>
            </a>
        );
    }

    render()
    {
        return (
            <div className="projectContainer">
                <div className="projectText">
                    <h1 className="projectTitle regularText">
                        {this.props.title}
                    </h1>
                    <h3 className="projectDescription regularText light">
                        {this.props.description}
                    </h3>
                    <h3 className="projectTags coloredText">
                        {this.props.tags.map(tag => {
                            return tag + " "
                        })}
                    </h3>
                </div>
                <div className="projectInteractive">
                    <a target="_blank" className="projectBannerContainer" href={this.props.website}>
                        <img className="projectBanner" src={this.props.img} alt="projectImg" />
                    </a>
                    <div className="projectInteractions">
                        {this.getGithub(this.props)}
                        {this.getLink(this.props)}
                    </div>
                </div>
            </div>
        );
    }
}