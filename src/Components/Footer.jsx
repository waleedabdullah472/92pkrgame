import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <main>
        {/* Your page content goes here */}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 - <a href="https://92pkrgame.com" className="footer-link">92PKRGame.com</a> | Best Card and Slot Game in Pakistan
          </p>
        </div>

        <div className="whatsapp-icon">
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

