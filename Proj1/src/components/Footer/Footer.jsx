import React from "react";
import "./Footer.css"; // optional

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Niraj Singha. All rights reserved.</p>
      <p>
        <a href="mailto:singhaniraj1234@gmail.com" style={{ color: "#0ff" }}>
          Email
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/nirajsingha"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0ff", margin: "0 10px" }}
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/NirajSingha"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0ff" }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
