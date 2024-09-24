// src/TemperatureIndicator.js
import React from 'react';

function TemperatureIndicator({ temperature }) {
  const tempStyles = {
    color: temperature > 30 ? 'red' : temperature > 15 ? 'orange' : 'blue', // Color based on temperature
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <p style={tempStyles}>Current Temperature: {temperature}°C</p>
    </div>
  );  
}
export default TemperatureIndicator;