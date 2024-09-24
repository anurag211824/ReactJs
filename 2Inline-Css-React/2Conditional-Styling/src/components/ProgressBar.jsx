// src/ProgressBar.js
import React from 'react';

function ProgressBar({ percentage }) {
  // Conditional styles based on the percentage value
  const progressBarStyles = {
    width: `${percentage}%`, // Width based on the percentage
    //conditional Styling
    backgroundColor: percentage > 75 ? 'green' : percentage > 50 ? 'yellow' : 'red',
    height: '30px',
    transition: 'width 0.5s ease-in-out',
    borderRadius: '5px',
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0de', borderRadius: '5px' }}>
      <div style={progressBarStyles}></div>
    </div>
  );
}

export default ProgressBar;
