import React from "react";
import './About.css';
import vandana_profile from './vandana_profile.jpeg';

function About() {
    return ( 
        <div className="profile">
          <div className="profile__info__left">
            <div className="profile__photo__container">
              <img src={vandana_profile} alt="Vandana"></img>
            </div>
            <div className="profile__title">
              <p className="profile__name">Vandana Karan</p>
              <hr></hr>
              <p className="jobTitle">R&D Engineer | Aspiring UX Researcher</p>
            </div>
            <div className="profile__connect">
            </div>
          </div>
          <div className="profile__info__right">
            <div className="profile__greeting">
              <p>Hello!</p>
            </div>
            <div className="profile__summary">
              <p>My name is Vandana, and I am passionate about accessible and innovative products. Check out my work:</p>
            </div>
            <div className="profile__portfolio">
              <a href="/resume" className="profile__button">Resume</a>
              <a href="/projects" className="profile__button">Projects</a>
            </div>
            <br></br>
            <div className="profile__about">
              <p>Professionally, my background is in Technology R&D and Innovation, where I specialize in research and data science proof-of-concepts.
                In my R&D career, I pitched, ideated, and developed new ideas heavily informed by market research and client needs. From much trial and error, I
                learned how to develop valuable ideas for both businesses and users.</p>
              <p>What's next, you might ask?</p>
              <em>UX Research.</em>
              <p>While I have greatly enjoyed everything I've learned in R&D, I am most interested in humans,
                and how technology can be used to introduce happiness and ease into daily life. I have found in my career that products often favor business over users, instead of the other way around.</p>
              <p>UX Research is a wonderful way to not only learn about how humans use technology, but
                also a great way to center users in developing new products. Hence why I am interested in conducting user research, and gathering insights to build 
                helpful and accessible products.
              </p>
              <p>
                Outside of my professional life, I have a variety of interests, including running, cooking, baking, reading, Asian-American history, art,
                mutual aid... and whatever else I decide to pick up next.
              </p>
              <p></p>
            </div>
          </div>
        </div>
    );
  }
  
  export default About;
  
