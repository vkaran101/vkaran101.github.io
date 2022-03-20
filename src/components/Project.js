import React from "react";
import './Projects.css';
import lightbulb_stock from './lightbulb_stock.jpeg';
import { Link } from "react-router-dom";


class Project extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const isPreview = this.props.isPreview;
        if (isPreview) {
            return(
                <div className="projects__preview">
                    <div className="projects__preview__info">
                        <Link to="/projects/AAHW">Project Name</Link>
                        <p className="project__preview__description">Description text</p>
                    </div>
                    <div className="project__preview__photo">
                        <img src={lightbulb_stock} width="300" alt="project"></img>
                    </div>
                </div>
            );        
        }
        return (
            <div className="projects__main">
                <p className="page__header">Project Name</p>
            </div>
        );
    }
}

export default Project;