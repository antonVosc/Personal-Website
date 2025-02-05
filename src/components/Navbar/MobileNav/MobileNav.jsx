import React, { useState } from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setOpenMenu(false);
  };

  return (
    <>
      <div className={`mobile-menu ${ isOpen ? "active" : "" }`} onClick={ toggleMenu }>
        <div className="logo-container" style={{ backgroundColor: isOpen ? "#342864" : "transparent", padding: isOpen ? "1rem" : "0", }}>
          <img className="logo" src="./assets/images/logo.png" alt="" onClick={() => scrollToSection("home")} />
        </div>
        
        <div className="mobile-menu-container">
          <div className="burger-menu">
            ☰
          </div>

          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("home")}>Home</a>
            </li>

            <li>
              <a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a>
            </li>

            <li>
              <a className="menu-item" onClick={() => scrollToSection("education")}>Education</a>
            </li>

            <li>
              <a className="menu-item">Work Experience</a>
            </li>

            <li>
              <a className="menu-item">My Projects</a>
            </li>

            <button className="contact-btn" onClick={() => { toggleMenu(); }}>
              Contact Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
