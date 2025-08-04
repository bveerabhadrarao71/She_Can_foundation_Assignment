import React from 'react';

const Leaderboard = () => {
  const leaders = [
    { name: 'Ananya', donations: 9000 },
    { name: 'Ravi', donations: 7500 },
    { name: 'Advik', donations: 4500 }
  ];

  return (
    <div>
      <h3>🏆 Leaderboard</h3>
      <ol>
        {leaders.map((person, index) => (
          <li key={index}>{person.name} - ₹{person.donations}</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
