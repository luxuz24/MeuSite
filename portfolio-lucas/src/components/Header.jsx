// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-img">
          <img src="/lcklogo.png" alt="Minha Logo" />
        </div>

        <nav className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
        </nav>

        <a
          href="/curriculo.pdf"
          download="Curriculo_Lucas_Java.pdf"
          className="btn-cv"
        >
          Baixar CV 📄
        </a>
      </div>
    </header>
  );
};

export default Header;
