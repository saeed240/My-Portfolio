import { useState } from "react";

//internal import
import favIcon from "../../logos/favIcon.png";
import "./styles.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (id === "contact" && formRef?.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    scrollToSection(id);
  };

  const scrollToSection = (id) => {
    const sectionId = document.getElementById(id);
    if (sectionId) {
      const headerOffset = 50;
      const elementPosition =
        sectionId.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="nav-container">
        <a href="/">
          <img src={favIcon} alt="favIcon" />
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="close-icon">&#215;</span>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>

        <ul className={`tabs ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => handleClick(e, "home")}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick(e, "about")}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleClick(e, "projects")}>
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="contact"
              onClick={() => handleClick(e, "contact")}
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
