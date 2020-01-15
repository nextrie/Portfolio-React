import React from 'react';
import "./SkillsTable.css";

export default class SkillsTable extends React.Component
{
    render()
    {
        return (
            <div className="skillsTable">
                <h3 className="skillsCategory regularText">{this.props.categoryTitle}</h3>
                <div className="skillList">
                    {this.props.skills.map(skill => 
                    {
                        return (
                            <h3 key={skill} className="skill regularText light">
                                <div className="coloredDot"></div>
                                {skill}
                            </h3>
                        );
                    })}
                </div>
            </div>
        );
    }
}