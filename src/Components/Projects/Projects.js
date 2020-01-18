import React from 'react';
import "./Projects.css";
import "./Projects_Responsive.css";


//Components
import PageTitle from "../PageTitle/PageTitle.js";
import Project from "./Project/Project.js";

//Images
import Kick from "../../assets/images/kick.png";
import DiscordInvites from "../../assets/images/discordinvitesv2.png";

export default function Projects()
{
    return (
        <div id="projectsContainer" className="projectsContainer">
            <PageTitle direction="left" pageTitle="Featured_Projects" pageCount="2" />
            <div className="project">
                <Project 
                    title="KickApp"
                    description="Kick is a phone app based on the Ionic framework and Angular. My role in this project was to create from scratch the app website using React."
                    tags={["React.JS,", "HTML,", "CSS"]}
                    img={Kick}
                    github={"https://github.com/nextrie/KickApp-Web"}
                    website={"http://kickapp.fr"}
                />
            </div>
            <div className="project">
                <Project 
                    title="DiscordInvites V2"
                    description="DiscordInvites is a discord server advertising website. I was hired to rewrite from scratch the entire website front end using jQuery and native html, css. I do not have the permissions to make the source code public."
                    tags={["jQuery,", "HTML,", "CSS"]}
                    img={DiscordInvites}
                    github={null}
                    website={"https://discordinvites.net"}
                />
            </div>
            <div className="project">
            
            </div>
        </div>
    );
}