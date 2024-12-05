import React from 'react';

const Movie = () => {
  return (
    <div>
      <h2>Movie Title</h2>
      <div className="movie-detail">
        <img src="https://via.placeholder.com/300x450" alt="Movie Poster" />
        <div>
          <h3>Synopsis</h3>
          <p>
            A thrilling movie that follows the journey of a young hero who embarks on an adventure to save the world from an impending disaster.
          </p>
          <h3>Cast</h3>
          <ul>
            <li>Actor 1</li>
            <li>Actor 2</li>
            <li>Actor 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
