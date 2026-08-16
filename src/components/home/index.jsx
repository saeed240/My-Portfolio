import React from "react";

//internal import

import "./styles.css";
import linkedin from "../../logos/linkedin.png";
import github from "../../logos/github.png";
import resume from "../../logos/resume.png";
import profilePic from "../../logos/profilePic.jpg";

function Home() {
  return (
    <>
      <div id="home-container">
        <h1>Hi, I am Ibrahim</h1>

        <div className="intro">
          <p>
            <span className="developer">Front-End Developer</span> Building
            responsive and user-friendly web experiences. Passionate about
            creating scalable, high-performance websites and applications using
            modern technologies.
            <span className="text">
              I am always open to new projects, collaborations, and creative
              challenges. Feel free to{" "}
              <a href="/contact" className="get">
                get in touch!{" "}
              </a>{" "}
            </span>
          </p>

          <img src={profilePic} alt="profile picture" />
        </div>

        <div className="logo-container">
          <a href="">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="github.com/saeedibrahim">
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={resume} alt="resume" />
          </a>
        </div>

        <div className="skills-container">
          <a href="">
            <p>SKILLS</p>
          </a>
          <a href="">
            <p>PROJECTS</p>
          </a>
          <a href="">
            <p>EXPERIENCE</p>
          </a>
          <a href="">
            <p>CONTACT ME</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
