import React from "react";
const Projects = () => {
  const projects = [
    {
      title: "Analise de Dados IBGE",
      description:
        "Aplicação Desktop com JavaFX para visualização de dados demográficos. Utiliza PostgreSQL para consultas complexas e otimizadas.",
      techs: ["Java", "JavaFX", "PostgreSQL"],
      repolink: "https://github.com/luxuz24/Analise_Dados_IBGE",
      image: "./IBGE.png",
    },
    {
      title: "Sistema Bancário POO",
      description:
        "Sistema completo de gestão de contas aplicando padrão MVC, encapsulamento e persistência de dados.",
      techs: ["Java", "POO", "MVC", "Design Patterns"],
      repolink: "https://github.com/luxuz24/sistema-bancario-poo",
      image: "./SISTEMA.jpg",
    },
  ];
  return (
    <section className="projects-section" id="projetos">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-image">
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.techs.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repolink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project"
              >
                {" "}
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
