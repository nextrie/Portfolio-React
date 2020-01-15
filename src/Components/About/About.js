import React from 'react';
import "./About.css";
import "./About_Responsive.css";

//Components
import PageTitle from "../PageTitle/PageTitle.js";
import SkillsTable from "../SkillsTable/SkillsTable.js";

//Images
import ProfilePicture from "../../assets/images/pp.jpg"

export default function About()
{
    return (
        <div id="aboutContainer" className="aboutContainer">
            <PageTitle />
            <div className="presentationContainer">
                <img className="profilePicture" src={ProfilePicture} />
                <div className="presentationTextContainer regularText">
                    Hello! I'm Alex, a <span className="bold coloredText">fullstack</span> web developer based in Paris. I enjoy to learn new technologies to build fast, beautiful and secured web apps. I develop useful platforms during my spare time so that i can practice my coding skills and make people's daily routine easier. You can check out some of my work below and even check my latest releases on github !
                </div>
            </div>
            <div className="skillsContainer">
                <h1 className="regularText">Skills</h1>
                <div className="skillsTableContainer">
                    <SkillsTable 
                    categoryTitle="Programming languages"
                    skills={["JavaScript", "HTML", "CSS & SASS", "C#", "PHP"]}
                    />
                    <SkillsTable 
                    categoryTitle="Frameworks"
                    skills={["React.JS", "Electron.JS", "jQuery"]}
                    />
                    <SkillsTable 
                    categoryTitle="Technologies"
                    skills={["Node.JS", ".NET", "MySQL"]}
                    />
                </div>
            </div>
        </div>
    );
}