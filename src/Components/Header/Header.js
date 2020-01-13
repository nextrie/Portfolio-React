import React from 'react';
import "./Header.css";
import "./Header_Responsive.css";

//Images
import FloatingReact from "../../assets/images/react.svg";
import PageDown from "../../assets/icons/down.png";

//Components
import Button from "../Button/Button.js";

export default function Header()
{
    return (
        <div className="headerContainer">
            <img className="headerImg" src={FloatingReact} />
            <div className="headerContent">
                <h1 className="coloredText headerTitle">Hey, I'm Alex,</h1>
                <h1 className="secondaryText headerDesc">FullStack Web Developer.</h1>
                <h1 className="regularText light headerText">
                    I build your platform using modern technologies like React, Node.JS and more.
                </h1>
                <Button title="Contact Me" link="#" />
                <div className="pageDownContainer">
                    <img className="pageDown" src={PageDown} />
                </div>
            </div>
        </div>
    );
}