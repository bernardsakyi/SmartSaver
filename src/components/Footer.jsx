import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn about our company and mission.</p>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <p>Explore the features of our app.</p>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>Get help and support.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Reach out to us.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
