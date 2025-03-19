import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-card">
          <h2 className="glitch" data-text="About Me">
            About Me
          </h2>
          <p>
            I'm a passionate web developer specializing in building beautiful,
            functional, and responsive websites. I love turning ideas into
            reality with code!
          </p>

          <div className="stats">
            <div className="stat">
              <h3>Fresher</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <a
            href="F:\PORTFOLIO\Proj1\src\assets\Niraj_Singha_Frontend_Developer_CV.pdf"
            download
            className="btn-neon"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
