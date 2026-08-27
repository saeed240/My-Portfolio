//internal import
import "./styles.css";
import { linkedin, github, resume, profilePic } from "../../";

function Home() {
  return (
    <>
      <div id="home">
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
              <a href="#contact" className="get">
                get in touch!{" "}
              </a>{" "}
            </span>
          </p>

          <img src={profilePic} alt="profile picture" />
        </div>

        <div className="logo-container">
          <a href="https://linkedin.com/in/ibrahim-saeed-88783342a/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/saeed240">
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={resume} alt="resume" />
          </a>
        </div>

        <div className="skills-container">
          <a href="#skills">
            <p id="skills">SKILLS</p>
          </a>
          <a href="#projects">
            <p>PROJECTS</p>
          </a>
          <a href="#experience">
            <p id="experience">EXPERIENCE</p>
          </a>
          <a href="#contact">
            <p>CONTACT ME</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
