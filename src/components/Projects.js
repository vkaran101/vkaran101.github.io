import React from "react";
import './Projects.css';
import Project from "./Project";


function Projects(props) {
    return ( 
        <div>
            <p className="page__header">Projects</p>
            <Project />
        </div>
    );
  }
  
export default Projects;