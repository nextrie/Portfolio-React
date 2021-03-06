import React from 'react';
import "./Header.css";
import "./Header_Responsive.css";

//Images
import FloatingReact from "../../assets/images/react.svg";
import PageDown from "../../assets/icons/down.png";
import PDF from "../../assets/resume.pdf";

//Components
import Button from "../Button/Button.js";

export default function Header()
{
    return (
        <div id="headerContainer" className="headerContainer">
            <img className="headerImg" alt="floatingElement" src={FloatingReact} />
            <div className="headerContent">
                <h1 className="coloredText headerTitle">Hey, I'm Alex,</h1>
                <h1 className="secondaryText headerDesc">FullStack Web Developer.</h1>
                <h1 className="regularText light headerText">
                    I build your platform using modern technologies like React, Node.JS and more.
                </h1>
                <Button title="My Resume" link={PDF} />
                <div className="pageDownContainer">
                    <a href="#aboutContainer">
                        <img className="pageDown" alt="pageDown" src={PageDown} />
                    </a>
                </div>
            </div>
        </div>
    );
}