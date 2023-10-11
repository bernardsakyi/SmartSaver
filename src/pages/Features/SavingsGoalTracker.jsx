import React, { useState } from 'react';
import './SavingsGoalTracker.css'; // Add your CSS file for styling

const SavingsGoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);
  const [savings, setSavings] = useState(0);

  const addGoal = () => {
    setGoals([...goals, { name: newGoal, amount: goalAmount, saved: 0 }]);
    setNewGoal('');
    setGoalAmount(0);
  };

  const handleSavingsChange = (e) => {
    const newSavings = parseFloat(e.target.value);
    setSavings(newSavings);
    // Update the saved amount for the selected goal
    const updatedGoals = goals.map((goal) => {
      if (goal.name === newGoal) {
        return { ...goal, saved: newSavings };
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  return (
    <div className="savings-goal-tracker-container">
      <h2>Savings Goal Tracker</h2>
      <div className="goal-form">
        <h3>Set a New Savings Goal</h3>
        <input
          type="text"
          placeholder="Goal Name (e.g., Vacation, Emergency Fund)"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Goal Amount ($)"
          value={goalAmount}
          onChange={(e) => setGoalAmount(parseFloat(e.target.value))}
        />
        <button onClick={addGoal}>Set Goal</button>
      </div>
      <div className="goals-list">
        <h3>Your Savings Goals</h3>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              <strong>{goal.name}</strong> - ${goal.saved} saved out of ${goal.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="savings-input">
        <h3>Track Your Savings</h3>
        <input
          type="number"
          placeholder="Enter Your Savings ($)"
          value={savings}
          onChange={handleSavingsChange}
        />
      </div>
    </div>
  );
};

export default SavingsGoalTracker;
