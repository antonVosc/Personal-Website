import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
    const handleClick = (url) => {
        window.location.href = url;
    }

    return (
        <div className="project-card" onClick={ () => handleClick(details.link) }>
            <h6>{ details.title }</h6>

            <div className="project-duration">{ details.date }</div>
        </div>
    );
};

export default ProjectCard;