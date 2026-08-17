import React from "react";

//internal import
import "./styles.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Contact Me_______</h2>

        <div className="socials">
          <a href="linkedin">
            <p>LINKEDIN</p>
          </a>
          <a href="github">
            <p>GITHUB</p>
          </a>
          <a href="resume">
            <p>RESUME</p>
          </a>
        </div>

        <div className="message">
          <h2>Get In Touch</h2>

          <div className="form">
            <label htmlFor="full-name" aria-label="full-name">
              FULL NAME{" "}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter your full name"
              />
            </label>

            <label htmlFor="email" aria-label="email address">
              EMAIL{" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
              />
            </label>

            <label htmlFor="message">
              MESSAGE
              <textarea
                name="message"
                id="message"
                placeholder="Please write your message here!"
                maxLength={500}
              ></textarea>
            </label>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
