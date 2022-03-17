import React from "react";
import './Projects.css';
import lightbulb_stock from './lightbulb_stock.jpeg';


class ProjectAAHW extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="projects">
                <div className="projects__info">
                    <h2>Northeastern Asian American Heritage Week</h2>
                    <p>Description text</p>
                </div>
                <div className="project__photo">
                    <img src={lightbulb_stock} width="300" alt="project"></img>
                </div>
            </div>
        );    
    }
}

export default ProjectAAHW;