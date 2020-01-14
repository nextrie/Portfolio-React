import React from 'react';
import "./NavBar.css";
import "./NavBar_Responsive.css";

//Components
import Button from "../Button/Button.js";

//Images
import MenuIcon from "../../assets/icons/menu.png";

export default class NavBar extends React.Component
{
    displayNavBar(responsiveMenu)
    {
        if (!responsiveMenu)
            return ;
        var isMenuVisible = window.getComputedStyle(responsiveMenu).right === "0px";

        if (!isMenuVisible)
            responsiveMenu.style.right = "0px";
        else
            responsiveMenu.style.right = "-400px";
    }

    render()
    {
        return (
            <div className="navBarContainer">
                <div className="navBarContent">
                    <div className="logo">
                        <h2 className="regularText italic">
                            Alexandre_<span className="coloredText normal">Gerez</span>
                        </h2>
                    </div>
                    <a className="navResponsiveButton" onClick={() => {this.displayNavBar(this.refs.navMenu)}}>
                        <img src={MenuIcon} />
                    </a>
                    <div ref="navMenu" className="navLinks regularText normal">
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
                            <Button title="</Contact Me>" link="mailto:pro@alexandregerez.com"/>
                        </a>
                    </div>
                </div>
            </div>
        ); 
    }
}