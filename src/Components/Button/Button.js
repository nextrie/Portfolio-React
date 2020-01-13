import React from 'react';
import "./Button.css";

export default function Button(props)
{
    return (
        <div className="buttonContainer coloredText" onClick={() => {document.location.href = getButtonLink(props)}}>
            {getButtonTitle(props)}
        </div>
    );
}

function getButtonLink(props)
{
    if (props.link)
        return props.link;
    return "err";
}

function getButtonTitle(props)
{
    if (props.title)
        return props.title;
    return "";
}