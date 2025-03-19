import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="glow-name" data-text="Hello I'm Niraj Singha">
          Hello I'm Niraj Singha
        </h1>

        <h2 className="typewriter">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Frontend Designer",
                "React Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="hero-subtitle">
          Crafting modern, responsive, and interactive websites.
        </p>

        <a href="#contact" className="cta-button">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
