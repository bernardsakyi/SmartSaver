import React from 'react';
import './ContactUsPage.css'; // Add your CSS file for styling

const ContactUsPage = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="contact-info">
        <h3>Reach Out to Us</h3>
        <p>If you have any questions or concerns, feel free to contact us through the form below.</p>
      </div>
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="alternate-contact">
        <h3>Alternate Contact Methods</h3>
        <p>
          If you prefer to contact us via email or phone, please feel free to reach out using the following contact
          information:
        </p>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
