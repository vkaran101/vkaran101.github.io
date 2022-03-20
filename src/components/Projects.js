import React from "react";
import './Projects.css';
import Project from "./Project";
import ProjectAAHW from "./ProjectAAHW";

function Projects(props) {
    return ( 
        <div>
            <p className="page__header">Projects</p>
            {/* <p className="projects__subheader">Coming soon!</p> */}
            <ProjectAAHW isPreview={true}/>
            <Project />
        </div>
    );
  }
  
export default Projects;