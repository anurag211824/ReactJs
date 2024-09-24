// src/App.js
import React from 'react';
import EcommerceCard from './components/EcommerceCard';

function App() {
  const apps = [
    {
      appName: 'Amazon',
      description: 'One of the largest online marketplaces.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      website: 'https://www.amazon.com',
    },
    {
      appName: 'eBay',
      description: 'A popular platform for buying and selling goods.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',
      website: 'https://www.ebay.com',
    },
    {
      appName: 'Walmart',
      description: 'A leading retail corporation with a robust online presence.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
      website: 'https://www.walmart.com',
    },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {apps.map((app, index) => (
        <EcommerceCard
          key={index}
          appName={app.appName}
          description={app.description}
          logo={app.logo}
          website={app.website}
        />
      ))}
    </div>
  );
}

export default App;
