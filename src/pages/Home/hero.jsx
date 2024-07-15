import React from 'react';
import './hero.css'; 
import profilepic from '../../assets/profile pic.jpeg'

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="profile-content">
          <h1>Hi, I am John, <br /> Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="download-btn">Download Resume</button>
        </div>
        <div className="profile-image">
          <img src={profilepic} alt="John" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
