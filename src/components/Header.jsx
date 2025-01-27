import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import '../styles/Header.scss'; // Ensure this path is correct

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Generic globe icon


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/keith.richardson.940"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/dr-keith-richardson-cpa-us-army-vet-34923924/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/6rbusiness/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.trinity.edu/directory/krichar2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="University"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </div>
    </header>
  );
};

export default Header;
