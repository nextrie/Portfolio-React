import React from 'react';
import "./Projects.css";
import "./Projects_Responsive.css";


//Components
import PageTitle from "../PageTitle/PageTitle.js";

export default function Projects()
{
    return (
        <div className="projectsContainer">
            <PageTitle direction="left" pageTitle="Featured_Projects" pageCount="2" />
        </div>
    );
}