import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="glitch" data-text="My Skills">
        My Skills
      </h2>

      <div className="skills-container">
        {/* Skill Card */}
        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
          <p>Advanced</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
          <p>Advanced</p>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
          <p>Intermediate</p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React.js</h3>
          <p>Advanced</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon node" />
          <h3>Node.js</h3>
          <p>Intermediate</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
