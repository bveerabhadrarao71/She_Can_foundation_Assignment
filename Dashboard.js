import React from 'react';
import { userData } from '../data/dummyData';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome, {userData.name}</h2>
      <p>Referral Code: {userData.referralCode}</p>
      <p>Total Donations Raised: ₹{userData.totalDonations}</p>

      <h3>Rewards</h3>
      <ul>
        <li>🎁 Bronze Donor Badge</li>
        <li>🎁 Early Access to Events</li>
        <li>🎁 Certificate of Recognition</li>
      </ul>
    </div>
  );
};

export default Dashboard;
