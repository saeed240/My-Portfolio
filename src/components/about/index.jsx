import React from "react";

//internal import
import "./styles.css";
import html from "../../logos/html.png";
import css from "../../logos/css3.png";
import javascript from "../../logos/javascript.png";
import react from "../../logos/react.png";
import git from "../../logos/git.png";
import typescript from "../../logos/typescript.png";
import github from "../../logos/github.png";
import tailwind from "../../logos/tailwind.png";

function About() {
  return (
    <>
      <div className="about-container">
        <h2>About Me_______</h2>
        <p>
          I am a passionate Front-End Developer specializing in JavaScript,
          React.js. I enjoy creating responsive, user-friendly, and visually
          engaging web applications with clean, maintainable code.
          <span>
            I am focused on turning ideas into intuitive digital experiences
            while continuously learning and improving my skills to create better
            digital experiences.
          </span>
        </p>

        <div className="tech">
          <h3>SKILLS | TECNNOLOGIES</h3>
          <div className="images-container">
            <img src={html} alt="html-logo" />
            <img src={css} alt="css-logo" />
            <img src={javascript} alt="javascript-logo" />
            <img src={react} alt="react-logo" />
            <img src={git} alt="git-logo" />
            <img src={typescript} alt="typescript-logo" />
            <img src={github} alt="github-logo" />
            <img src={tailwind} alt="tailwind-logo" />
          </div>
        </div>

        <div className="experience-container">
          <h3>WORK EXPERIENCE</h3>
          <div className="experience">
            <div className="work">
              <h3>Computing Teacher</h3>
              <p>An-Nasr Academy School</p>
              <ul>
                <li>
                  Taught digital literacy, internet safety, and research skills
                  to students.
                </li>
                <li>
                  Maintained computer laboratory equipment and software
                  resources.
                </li>
                <li>
                  Collaborated with school leadership and teaching staff to
                  improve learning outcomes.
                </li>
                <li>
                  Supported IT department in planning and technology integration
                  initiatives.
                </li>
              </ul>
            </div>

            <div className="work">
              <h3>Verification Officer</h3>
              <p>Electoral Commission of Ghana</p>
              <ul>
                <li>
                  Verified voter identification documents and personal records.
                </li>
                <li>
                  Ensured accuracy and consistency of data in registration
                  systems.
                </li>
                <li>
                  Identified discrepancies and potential fraudulent submissions.
                </li>
                <li>Maintained detailed verification records and reports.</li>
              </ul>
            </div>

            <div className="work">
              <h3>ICT Teacher (National Service)</h3>
              <p>National Service Scheme-Ghana</p>
              <ul>
                <li>
                  Delivered instruction in computer fundamentals and digital
                  skills.
                </li>
                <li>
                  Promoted cyber-security awareness and safe internet practices.
                </li>
                <li>
                  Assisted students in developing practical technology skills.
                </li>
                <li>
                  Taught Microsoft Office application, email, and online
                  communication tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
