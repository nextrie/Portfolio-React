import React from 'react';
import "./Projects.css";
import "./Projects_Responsive.css";


//Components
import PageTitle from "../PageTitle/PageTitle.js";
import Project from "./Project/Project.js";
import Card_Project from "./Card_Project/Card_Project.js";

//Images
import Kick from "../../assets/images/kick.png";
import DiscordInvites from "../../assets/images/discordinvitesv2.png";
import QGF from "../../assets/images/quickgamefinder.png";

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
                <Project 
                        title="QuickGameFinder"
                        description="
                        QuickGameFinder is an Electron.JS based platform designed for gamers. I built this project in my spare time so that players never have to stay in the random matchmaking systems of games and choose their team before starting a game."
                        tags={["Electron.JS,", "Node.JS,", "HTML,", "CSS"]}
                        img={QGF}
                        github={"https://github.com/nextrie/quickgamefinder-electron"}
                        website={null}
                />
            </div>
            <div className="secondaryProjectsContainer">
                <h2 className="title regularText">More of my projects</h2>
                <div className="secondaryProjects">
                    <Card_Project 
                        title="MineMonitor"
                        description="MineMonitor is an Electron.JS based software i created in my spare time so that game servers owner can monitor in realtime their server activity."
                        tags={["Electron.JS,", "Node.JS,", "HTML,", "CSS"]}
                        github={"https://github.com/nextrie/mine_monitor"}
                        website={"test"}
                    />
                    <Card_Project 
                       title="YTAH"
                       description="YTAH is a remote administration tool written in c# allowing to control any computer the software is installed on. This project taught me a lot on cybersecurity and network oriented programmation."
                       tags={["C#,", ".NET,", "TCP & UDP,", "Security"]}
                       github={"https://github.com/nextrie/YTAH-Remote-Administration-Tool"}
                    />
                    <Card_Project />
                    <Card_Project />
                </div>
            </div>
        </div>
    );
}