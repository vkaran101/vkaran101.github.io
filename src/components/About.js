import React from "react";
import './About.css';

function About() {
    return ( 
        <div className="profile">
          <div className="profile__info">
            <h1>Yes, it is me</h1>
            <div className="profile__photo__container">

            </div>
            <div className="profile__title">

            </div>
            <div className="profile__connect">

            </div>
          </div>
          <div className="profile__info">
            <div className="profile__greeting">
              <h1>Hello</h1>
            </div>
            <div className="profile__summary">
              <h3>My name is Vandana, and I am passionate about research!</h3>
            </div>
            <div className="profile__portfolio">
              <a href="/resume" className="profile__button">Resume</a>
              <a href="/projects" className="profile__button">Projects</a>
            </div>
          </div>
        </div>
    );
  }
  
  export default About;
  