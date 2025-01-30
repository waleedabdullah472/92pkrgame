import React, { useEffect, useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`contact-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="contain-card">
        <h1>Contact Us</h1>
        <h4>Get in Touch with <a href="http://92pkrgame.com" target="_blank" rel="noopener noreferrer">92 PKR Game</a></h4> {/* Added target and rel */}

        <p>We’d love to hear from you! Whether you have a question, feedback, or need assistance with your account, feel free to reach out to us.</p>

        <div className="contact-info"> {/* Container for contact details */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+11234567890">+1 (123) 456-7890</a> {/* Example phone number */}
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:info@92pkrgame.com">info@92pkrgame.com</a> {/* Example email */}
          </div>
        </div>

        <div className="social-links"> {/* Container for social media links */}
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;