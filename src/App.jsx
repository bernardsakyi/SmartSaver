import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import CommunitySupport from './pages/CommunitySupport.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import CustomerSupportPage from './pages/CustomerSupportPage.jsx';
import FAQsSection from './pages/FAQsSection.jsx';
import BudgetingTools from './pages/Features/BudgetingTools.jsx';
import EducationalResources from './pages/Features/EducationalResources.jsx';
import FinancialInsights from './pages/Features/FinancialInsights.jsx';
import InvestmentRecommendations from './pages/Features/InvestmentRecommendations.jsx';
import SavingsGoalTracker from './pages/Features/SavingsGoalTracker.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // You can create a CSS file for styling


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/community-support" component={CommunitySupport} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/customer-support" component={CustomerSupportPage} />
          <Route path="/faqs" component={FAQsSection} />
          {/* Features */}
          <Route path="/features/budgeting-tools" component={BudgetingTools} />
          <Route path="/features/educational-resources" component={EducationalResources} />
          <Route path="/features/financial-insights" component={FinancialInsights} />
          <Route path="/features/investment-recommendations" component={InvestmentRecommendations} />
          <Route path="/features/savings-goal-tracker" component={SavingsGoalTracker} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
