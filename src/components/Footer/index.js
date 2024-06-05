import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span>© 2024</span>
      <nav>
        <a href="/about">About</a>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookie">Cookie Policy</a>
        <a href="/copyright">Copyright Policy</a>
        <a href="/brand">Brand Policy</a>
        <a href="/visitor">Visitor Controls</a>
      </nav>
    </footer>
  );
};

export default Footer;
