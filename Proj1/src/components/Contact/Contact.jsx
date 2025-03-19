import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="glitch" data-text="Contact Me">
        Contact Me
      </h2>
      <p className="contact-text">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-container">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:singhaniraj1234@gmail.com">
            singhaniraj1234@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+918274951460">+91-8274951460</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/nirajsingha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/NirajSingha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
