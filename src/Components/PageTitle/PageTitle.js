import React from 'react';
import "./PageTitle.css";

export default class PageTitle extends React.Component
{
    constructor(props)
    {
        super(props);

        this.getPageTitleDirection = this.getPageTitleDirection.bind(this);
    }

    getPageCount(props)
    {
        if (props.pageCount)
            return ("0" + props.pageCount + ".");
        return ("00.");
    }
    
    getPageTitle(props)
    {
        if (props.pageTitle)
            return props.pageTitle;
        return ("Undefined");
    }
    
    getPageTitleDirection()
    {
        if (!this.props.direction || this.props.direction === "right")
            return ;
        
        return ({"justify-content": "flex-start"});
    }

    render()
    {
        return (
            <div style={this.getPageTitleDirection()} className="pageTitleContainer regularText">
                <h2 className="light">
                    <span className="pageCount coloredText">{this.getPageCount(this.props)}</span>
                    <span className="pageTitle">
                        {"</"}
                    </span>
                    {this.getPageTitle(this.props)}
                    <span className="pageTitle">
                        {">"}
                    </span>
                </h2>
            </div>
        );
    }
}

