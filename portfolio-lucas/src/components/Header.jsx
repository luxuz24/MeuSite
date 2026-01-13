// src/components/Header.jsx
import React, { useState } from "react";
import "../App.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-img">
          <img src="/logo.png" alt="LCK Logo" />
        </div>

        
        <button className="menu-hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

       
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>

          <a
            href="/curriculo.pdf"
            download="Curriculo_Lucas_Java.pdf"
            className="btn-cv"
            onClick={closeMenu}
          >
            Baixar CV 📄
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
