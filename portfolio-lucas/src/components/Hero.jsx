// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="hero-background" id="inicio">
      {/* Overlay para escurecer a imagem de fundo */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="foto-perfil">
          <img
            src="https://github.com/luxuz24.png"
            alt="Foto de perfil de Lucas Cauã"
            loading="eager"
          />
        </div>

        <div className="hero-texto">
          <h1>Olá, sou o Lucas Cauã 👋</h1>
          <h2>Desenvolvedor Back-end (Java & PostgreSQL)</h2>
          <p>
            Estudante de TADS focado em construir sistemas robustos e
            escaláveis. Atualmente expandindo para o Fullstack com React.
          </p>

          <div className="botoes">
            <a
              href="https://www.linkedin.com/in/lucas-cauã-3856412ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/luxuz24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
