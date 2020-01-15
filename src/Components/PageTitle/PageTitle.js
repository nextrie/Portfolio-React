import React from 'react';
import "./PageTitle.css";

export default function PageTitle()
{
    return (
        <div className="pageTitleContainer regularText">
            <h2 className="light">
                <span className="pageCount coloredText">01.</span>
                <span className="pageTitle">
                    {"</"}
                </span>
                About_Me
                <span className="pageTitle">
                    {">"}
                </span>
            </h2>
        </div>
    );
}