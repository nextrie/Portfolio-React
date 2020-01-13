import React from 'react';
import "./NavBar.css";

//Components
import Button from "../Button/Button.js";

export default function NavBar()
{
    return (
        <div className="navBarContainer">
            <div className="navBarContent">
                <div className="logo">
                    <h2 className="regularText italic">
                        Alexandre_<span className="coloredText normal">Gerez</span>
                    </h2>
                </div>
                <div className="navLinks regularText normal">
                    <a href="#" className="navLink regularText">
                        {"</Home>"}
                    </a>
                    <a href="#" className="navLink regularText">
                        {"</About_Me>"}
                    </a>
                    <a href="#" className="navLink regularText">
                        {"</Projects>"}
                    </a>
                    <a className="navLink">
                        <Button title="</Contact Me>" link="#"/>
                    </a>
                </div>
            </div>
        </div>
    );
}