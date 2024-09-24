// src/SeriesCard.js
import React from 'react';
import styles from './Netflix.module.css';

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  // Determine button style based on rating
  const buttonClass = rating >= 8.5 ? styles['button-high-rating'] : styles['button-average-rating'];

  // Determine rating class based on rating
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles['card-content']}>
        <h2>Name: {name}</h2>
        <h3 className={ratingClass}>
          Rating: <span className={styles.rating}>{rating}</span>
        </h3>
        <p className="text-3xl font-bold underline text-cyan-300">
          Summary: {description}
        </p>
        <p>Genre: {genre.join(', ')}</p>
        <p>Cast: {cast.join(', ')}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button className={`${styles.button} ${buttonClass}`}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
