import React from "react";
import './About.css';
import ProfileImage from '../../assets/img2.jpeg'
function About() {
  return (
    <div className="conatiner">
      <div className="about-us">
        <div className="profile">
          <img src={ProfileImage} alt="Profile" />
          <div className="profile-info">
            <h3>Pratik Ghongade</h3>
            <p>Passionate Software Developer</p>
          </div>
        </div>
        <p>Hello! I'm a web developer with a passion for creating modern and engaging web applications.</p>
        <p>I specialize in  Front-End Development, and I love transforming ideas into user-friendly experiences using React, Angular.</p>
      </div>
    </div>

  );
}
export default About;