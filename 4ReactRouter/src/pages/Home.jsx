import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to MovieZone</h2>
      <p>Your one-stop destination for all things movies!</p>
      <h3>Featured Movies</h3>
      <div className="flex space-x-4">
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie 1" />
          <h4>Movie 1</h4>
        </div>
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie 2" />
          <h4>Movie 2</h4>
        </div>
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie 3" />
          <h4>Movie 3</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
