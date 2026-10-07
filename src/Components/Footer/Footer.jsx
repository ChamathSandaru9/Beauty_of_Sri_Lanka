import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-about">
          <a href="#home" className="footer-logo">
            <img
              src="/logo.png"
              alt="Beauty of Sri Lanka logo"
            />

            <span>
              Beauty of <strong>Sri Lanka</strong>
            </span>
          </a>

          <p>
            Discover the beauty, culture, wildlife, experiences, and
            delicious flavors of the beautiful island of Sri Lanka.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#wildlife">Wildlife</a>
          <a href="#food">Food</a>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#destinations">Places to Visit</a>
          <a href="#experiences">Things to Do</a>
          <a href="#wildlife">Wildlife</a>
          <a href="#food">Sri Lankan Food</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <p>
            Follow us and discover more of Sri Lanka.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Beauty of Sri Lanka. All rights reserved.
        </p>

        <p>
          Made with ❤️ in Sri Lanka
        </p>
      </div>

    </footer>
  );
}

export default Footer;