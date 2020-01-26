import React from 'react';
import "./Footer.css";
import "./Footer_Responsive.css";

export default function Footer()
{
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="personnalInformation">
                    <h3 className="regularText">
                        <a className="regularText nodecoration" href="#headerContainer">Alexandre Gerez</a>
                    </h3>
                    <h4 className="regularText">
                        <a className="regularText nodecoration" target="_blank" href="mailto:pro@alexandregerez.com">Contact Me</a>
                    </h4>
                    <h4 className="regularText">
                        <a className="regularText nodecoration" target="_blank" href="https://github.com/nextrie">Github</a>
                    </h4>
                    <h4 className="regularText">
                        <a className="regularText nodecoration">+33 7 82 68 72 94</a>
                    </h4>
                </div>
            </div>
        </div>
    );
}