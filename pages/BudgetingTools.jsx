import React, { useState } from 'react';
import './BudgetingTools.css'; // Add your CSS file for styling

const BudgetingTools = () => {
  const [expenses, setExpenses] = useState([]);
  const [budgetCategories, setBudgetCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [budgetLimit, setBudgetLimit] = useState(0);

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { category: selectedCategory, amount: e.target.amount.value }]);
  };

  const handleCategoryAdd = () => {
    setBudgetCategories([...budgetCategories, selectedCategory]);
    setSelectedCategory('');
  };

  const calculateRemainingBudget = () => {
    const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    return budgetLimit - totalExpenses;
  };

  return (
    <div className="budgeting-tools-container">
      <h2>Budgeting Tools</h2>
      <div className="expense-form">
        <h3>Track Expenses</h3>
        <form onSubmit={handleExpenseSubmit}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>
            {budgetCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input type="number" name="amount" placeholder="Enter Amount" required />
          <button type="submit">Add Expense</button>
        </form>
      </div>
      <div className="category-form">
        <h3>Manage Budget Categories</h3>
        <div className="category-list">
          {budgetCategories.map((category) => (
            <div key={category} className="category-item">
              {category}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="New Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
        <button onClick={handleCategoryAdd}>Add Category</button>
      </div>
      <div className="budget-summary">
        <h3>Budget Summary</h3>
        <p>Total Expenses: ${expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0)}</p>
        <p>Budget Limit: ${budgetLimit}</p>
        <p>Remaining Budget: ${calculateRemainingBudget()}</p>
      </div>
    </div>
  );
};

export default BudgetingTools;
