import React from 'react';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
      <h1>Intern Dashboard</h1>
      <Login />
      <Signup />
      <Dashboard />
      <Leaderboard />
    </div>
  );
};

export default App;
