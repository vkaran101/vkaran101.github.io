import React from "react";
import './About.css';
import vandana_bitmoji from './vandana_bitmoji.png'

function About() {
    return ( 
        <div className="profile">
          <div className="profile__info">
            <div className="profile__photo__container">
              <img src={vandana_bitmoji} alt="Vandana"></img>
            </div>
            <div className="profile__title">
              <h2>Vandana Karan</h2>
              <hr></hr>
              <h3>Tech Professional</h3>
            </div>
            <div className="profile__connect">
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__greeting">
              <h1>Hello!</h1>
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
  