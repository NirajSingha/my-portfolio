import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio with React, featuring glitch text, animations, and a particle background.",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio-demo.com",
    },
    {
      title: "Weather App",
      description:
        "A simple weather application using React and OpenWeatherMap API to show real-time weather.",
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-demo.com",
    },
    {
      title: "E-Commerce Store",
      description:
        "Fully responsive e-commerce website with product search, filtering, and shopping cart functionality.",
      github: "https://github.com/yourusername/ecommerce-store",
      demo: "https://ecommerce-demo.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="glitch" data-text="My Projects">
        My Projects
      </h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
