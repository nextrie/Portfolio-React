import React from 'react';
import "./Button.css";

export default function Button(props)
{
    return (
        <a className="buttonLink" href={getButtonLink(props)}>
            <div className="buttonContainer coloredText">
                {getButtonTitle(props)}
            </div>
        </a>
    );
}

function getButtonLink(props)
{
    if (props.link)
        return props.link;
    return "#";
}

function getButtonTitle(props)
{
    if (props.title)
        return props.title;
    return "";
}