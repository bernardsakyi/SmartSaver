import React, { useState, useEffect } from 'react';
import './InvestmentRecommendations.css'; // Add your CSS file for styling

const InvestmentRecommendations = () => {
  const [userRiskTolerance, setUserRiskTolerance] = useState('moderate');
  const [investmentSuggestions, setInvestmentSuggestions] = useState([]);
  
  useEffect(() => {
    // Simulated API call to fetch investment recommendations based on user data
    // Replace this with an actual API call to fetch real data
    const fetchInvestmentData = async () => {
      try {
        // Fetch data from financial APIs based on user preferences
        // Example: const response = await fetch(`API_ENDPOINT_HERE`);
        // const data = await response.json();
        
        // Simulated data for demonstration purposes
        const data = [
          { type: 'Stocks', name: 'Tech Giant Inc.', recommendation: 'Buy' },
          { type: 'Mutual Funds', name: 'Global Growth Fund', recommendation: 'Hold' },
          { type: 'ETFs', name: 'Technology ETF', recommendation: 'Buy' }
        ];

        setInvestmentSuggestions(data);
      } catch (error) {
        console.error('Error fetching investment data:', error);
      }
    };

    fetchInvestmentData();
  }, [userRiskTolerance]);

  return (
    <div className="investment-recommendations-container">
      <h2>Investment Recommendations</h2>
      <div className="risk-tolerance-selector">
        <label>Select Your Risk Tolerance:</label>
        <select
          value={userRiskTolerance}
          onChange={(e) => setUserRiskTolerance(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="investment-list">
        <h3>AI-Driven Investment Suggestions</h3>
        <ul>
          {investmentSuggestions.map((investment, index) => (
            <li key={index}>
              <strong>{investment.type}</strong> - {investment.name} - Recommendation: {investment.recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvestmentRecommendations;
