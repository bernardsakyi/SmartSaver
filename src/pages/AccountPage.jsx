import React, { useState } from 'react';
/*import SecureTransactionComponent from './SecureTransactionComponent';*/
/*import TwoFactorAuthentication from './TwoFactorAuthentication';*/
/*import BiometricLogin from './BiometricLogin';*/
import './AccountPage.css'; // Add your CSS file for styling

const AccountPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBiometricAuthenticated, setIsBiometricAuthenticated] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here, set isAuthenticated to true upon successful authentication
    setIsAuthenticated(true);
  };

  const handleBiometricLogin = () => {
    // Implement your biometric authentication logic here, set isBiometricAuthenticated to true upon successful authentication
    setIsBiometricAuthenticated(true);
  };

  return (
    <div className="account-page-container">
      <h2>Account Page</h2>
      {!isAuthenticated && (
        <div className="login-section">
          <h3>Login</h3>
          <button onClick={handleLogin}>Login with Password</button>
          {isBiometricAuthenticated ? (
            <p>Biometric login successful!</p>
          ) : (
            <BiometricLogin />
          )}
        </div>
      )}
      {isAuthenticated && !isBiometricAuthenticated && (
        <div className="biometric-section">
          <h3>Biometric Login</h3>
          {isBiometricAuthenticated ? (
            <p>Biometric login successful!</p>
          ) : (
            <BiometricLogin />
          )}
        </div>
      )}
      {isAuthenticated && isBiometricAuthenticated && (
        <div className="secure-transaction-section">
          <h3>Secure Transactions</h3>
          <SecureTransactionComponent />
          <TwoFactorAuthentication />
        </div>
      )}
    </div>
  );
};

export default AccountPage;
