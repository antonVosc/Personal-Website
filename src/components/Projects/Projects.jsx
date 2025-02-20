import React from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="projects-container">
        <h5>Projects</h5>

        <div className="projects-content">
          { PROJECTS.map((item) => (<ProjectCard key={ item.title } details={ item }/>)) }
        </div>
    </section>
  );
};

export default Projects;