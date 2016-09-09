import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-column">
        <h3>About</h3>
        <a href="https://github.com/HCoban/Coussie">About Coussie</a>
        <Link to="/credits">Credits</Link>
      </ul>
      <ul className="footer-column">
        <h3>Connect</h3>
        <a href="https://github.com/HCoban">GitHub</a>
        <a href="https://www.linkedin.com/in/halilcoban">LinkedIn</a>
        <a href="https://github.com/HCoban">Portfolio</a>
      </ul>
    </div>
  );
};

export default Footer;
