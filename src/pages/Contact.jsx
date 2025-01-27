import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section: Contact Info */}
      <div className="contact-info">
        <h1>Contact</h1>
        <p>Keith Richardson is represented by 6RBusiness</p>
        <p>Email: keithr36@hotmail.com</p>
        <p>Phone: 407-914-3734</p>
      </div>

      {/* Right Section: Email Service Buttons */}
      <div className="email-buttons">
        <h2>Send an Email</h2>
        <p>Use one of the following email services to log in and send a message:</p>
        <div className="button-group">
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Gmail
          </a>
          <a
            href="https://outlook.live.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Outlook
          </a>
          <a
            href="https://mail.yahoo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Yahoo Mail
          </a>
          <a
            href="https://www.aol.com/mail"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            AOL Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
