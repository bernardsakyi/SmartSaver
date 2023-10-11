import React from 'react';
import './AboutUsPage.css'; // Add your CSS file for styling

const AboutUsPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        SmartSaver is dedicated to helping individuals and businesses manage their finances effectively. With our
        cutting-edge technology and user-friendly interface, we provide innovative solutions for saving, budgeting, and
        investing.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to empower people to achieve their financial goals by providing them with the tools and knowledge
        needed to make informed financial decisions.
      </p>
      <h3>Meet Our Team</h3>
      <div className="team-member">
        <img src="team-member-1.jpg" alt="Team Member 1" />
        <h4>John Doe</h4>
        <p>Co-Founder & CEO</p>
      </div>
      <div className="team-member">
        <img src="team-member-2.jpg" alt="Team Member 2" />
        <h4>Jane Smith</h4>
        <p>Co-Founder & CTO</p>
      </div>
      {/* Add more team members */}
    </div>
  );
};

export default AboutUsPage;
