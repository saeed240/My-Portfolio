import { useState } from "react";

//internal import
import favIcon from "../../logos/favIcon.png";
import "./styles.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div id="nav-container">
        <a href="/">
          <img src={favIcon} alt="favIcon" />
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`tabs ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact" className="contact">
              CONTACT ME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
