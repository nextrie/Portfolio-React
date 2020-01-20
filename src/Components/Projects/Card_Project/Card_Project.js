import React from 'react';
import "./Card_Project.css";
import "./Card_Project_Responsive.css";

//Images
import Link from "../../../assets/icons/link.png";
import Github from "../../../assets/icons/github.png";

export default function Card_Project(props)
{
    return (
        <div className="cardProjectContainer">
            <div className="cardProjectContent">
                <h3 className="cardProjectTitle coloredText">{props.title}</h3>
                <h4 className="cardProjectDescription secondaryText">
                    {props.description}
                </h4>
                <div className="projectLinks">
                    <div className="regularText">
                        {props.tags ? props.tags.map(tag => { return tag + " " }) : ''}
                    </div>
                    <div>
                        {getGithub(props)}
                        {getLink(props)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getGithub(props)
{
    if (!props.github)
        return ;
    return (
        <a target="_blank" href={props.github}>
            <img src={Github} alt='git'/>
        </a>
    );
}

function getLink(props)
{
    if (!props.website)
        return ;
    return (
        <a target="_blank" href={props.website}>
            <img src={Link} alt='link'/>
        </a>
    );
}