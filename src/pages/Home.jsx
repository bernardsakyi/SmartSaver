import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your Home page specific CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to SmartSaver</h1>
        <p>Your Personal Finance Companion</p>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Track your savings goals with our Savings Goal Tracker.</li>
          <li>Manage your expenses and budget effectively using Budgeting Tools.</li>
          <li>Get personalized Investment Recommendations based on your financial goals.</li>
          <li>Gain valuable insights with Financial Analytics and Predictive Tools.</li>
          <li>Explore educational resources for better financial literacy.</li>
          <li>Connect with our community for support and success stories.</li>
        </ul>
      </div>
      <div className="cta-section">
        <h2>Start Managing Your Finances Today!</h2>
        <Link to="/features">
          <button className="cta-button">Explore Features</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
