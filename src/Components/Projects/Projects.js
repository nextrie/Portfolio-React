import React from 'react';
import "./Projects.css";
import "./Projects_Responsive.css";


//Components
import PageTitle from "../PageTitle/PageTitle.js";
import Project from "./Project/Project.js";

//Images
import Kick from "../../assets/images/kick.png";

export default function Projects()
{
    return (
        <div id="projectsContainer" className="projectsContainer">
            <PageTitle direction="left" pageTitle="Featured_Projects" pageCount="2" />
            <div className="project">
                <Project 
                    title="KickApp"
                    description="Kick is a phone app based on the ionic framework and angular. My role in this project was to create from scratch the app website using React."
                    tags={["React.JS,", "HTML,", "CSS"]}
                    img={Kick}
                    github={"https://github.com/nextrie/KickApp-Web"}
                    website={"http://kickapp.fr"}
                />
            </div>
            <div className="project">

            </div>
            <div className="project">
            
            </div>
        </div>
    );
}