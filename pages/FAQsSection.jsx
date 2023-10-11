import React from 'react';

const FAQsSection = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {/* Include a list of frequently asked questions and their answers */}
      <div className="faq-item">
        <h3>How do I reset my password?</h3>
        <p>To reset your password, go to the login page and click on the 'Forgot Password' link.</p>
      </div>
      <div className="faq-item">
        <h3>Is my financial data secure?</h3>
        <p>Yes, we use industry-standard encryption methods to ensure the security of your financial data.</p>
      </div>
      {/* Add more FAQ items */}
    </div>
  );
};

export default FAQsSection;
