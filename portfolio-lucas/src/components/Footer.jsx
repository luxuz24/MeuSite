// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Desenvolvido por <strong>Lucas Cauã</strong> 💻
        </p>

        <div className="social-links">
          <a href="mailto:seuemail@exemplo.com" className="footer-link">
            📧 Entre em contato por Email
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-cauã-3856412ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/luxuz24"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
