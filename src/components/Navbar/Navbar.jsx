import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setOpenMenu(false);
  };

  return (
    <>
      <MobileNav isOpen={ openMenu } toggleMenu={ toggleMenu } />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className={`logo ${openMenu ? 'logo-active' : ''}`} src="./assets/images/logo.png" alt=""  style={{ cursor: 'pointer' }} onClick={() => scrollToSection("home")} />

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
              <a className="menu-item" onClick={() => scrollToSection("work-experience")}>Work Experience</a>
            </li>

            <li>
              <a className="menu-item" onClick={() => scrollToSection("projects")}>My Projects</a>
            </li>

            <button className="contact-btn" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
          </ul>

          <button class="menu-btn" onClick={ toggleMenu }>
            <span class={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
              { openMenu ? "close" : "menu" }
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;