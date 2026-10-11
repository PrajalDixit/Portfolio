import React, { useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { resumeUrl } from "../data/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="wordmark" aria-label="Prajal Dixit, back to top">Prajal Dixit<span className="wordmark-dot" /></a>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={resumeUrl} download="Prajal_Dixit_Resume.pdf"><FiDownload /> Resume</a>
          <button className="icon-btn" type="button" aria-label={`Switch to ${nextTheme} mode`} onClick={onToggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button className="icon-btn menu-btn" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
