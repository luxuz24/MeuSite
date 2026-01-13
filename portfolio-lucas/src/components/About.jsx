import React from "react";
const About = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-text">
            <h2 className="section-title">Sobre Mim</h2>
            <p>
              Sou estudante de{" "}
              <strong>
                Tecnologia em análise e desenvolvimento de sistemas (5º
                semestre)
              </strong>{" "}
              com previsão de conclusão para Dez/2026. Minha base técnica é em{" "}
              <strong>Java e Banco de Dados (PostgreSQL)</strong>, e atualmente
              estou expandindo meus horizontes para o Front-end com React.
            </p>
            <p>
              Mais do que apenas código, meu foco é resolver problemas. Tenho
              perfil "mão na massa": gosto de entender como as coisas funcionam
              por baixo do capô (daí meu interesse pelo Back-end) e estou sempre
              disposto a aprender novas ferramentas para ajudar a equipe a
              entregar valor.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>🎓</h3>
                <p>Tecnologia em Análise e Desenvolvimento de Sistemas</p>
                <span>5º semestre</span>
              </div>
              <div className="stat-item">
                <h3>📚</h3>
                <p>Foco Atual</p>
                <span>Back-end com Java e PostgreSQL|Front-End com React</span>
              </div>
              <div className="stat-item">
                <h3>🚀</h3>
                <p>Objetivo</p>
                <span>Desenvolvedor Full-Stack Júnior</span>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-grid">
              <span className="skill-badge">☕ Java (Core & OOP)</span>
              <span className="skill-badge">🐘 PostgreSQL</span>
              <span className="skill-badge">⚛️ React</span>
              <span className="skill-badge">🌐 HTML5 & CSS3</span>
              <span className="skill-badge">📝 Git & GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
