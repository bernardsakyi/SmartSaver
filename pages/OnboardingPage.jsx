import React, { useState } from 'react';
import './OnboardingPage.css'; // Add your CSS file for styling

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    goalType: '',
    goalAmount: '',
    timeframe: '',
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUser({
      ...user,
      interests: checked
        ? [...user.interests, name]
        : user.interests.filter((interest) => interest !== name),
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-container">
            <h2>Step 1: Account Setup</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={user.fullName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
            />
            <button onClick={handleNextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="step-container">
            <h2>Step 2: Guided Onboarding</h2>
            {/* ... */}
            <button onClick={handleNextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="step-container">
            <h2>Step 3: Customize Your Experience</h2>
            {/* ... */}
            <button onClick={handleNextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className="step-container">
            <h2>Step 4: Congratulations</h2>
            {/* ... */}
            <button>Start Exploring</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="onboarding-page">{renderStep()}</div>;
};

export default OnboardingPage;
