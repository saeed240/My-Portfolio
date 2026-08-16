import React from "react";

//internal import

import favIcon from "../../logos/favIcon.png";
import "./styles.css";

function Navbar() {
  return (
    <>
      <div id="nav-container">
        <a href="/">
          <img src={favIcon} alt="favIcon" />
        </a>

        <div className="tabs">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact me" className="contact">
            CONTACT ME
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
