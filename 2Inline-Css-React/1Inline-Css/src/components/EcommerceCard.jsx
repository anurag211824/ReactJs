// src/components/EcommerceCard.js
import React from 'react';

const EcommerceCard = ({ appName, description, logo, website }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '100px',
  };

  const headingStyle = {
    fontSize: '18px',
    color: '#333',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <img src={logo} alt={`${appName} Logo`} style={imageStyle} />
      <h3 style={headingStyle}>{appName}</h3>
      <p>{description}</p>
      <a href={website} style={linkStyle} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default EcommerceCard;
