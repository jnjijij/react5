// MoviesPage.js
import React from 'react';
import '../styles.css';

const MoviesPage = ({ movies }) => (
  <div className="container movies-page">
    <h2>Movies</h2>
    <ul className="movies-list">
      {movies.map((movie, index) => (
        <li key={index} className="movie-item">
          <img src={movie} alt={`Movie ${index + 1}`} />
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesPage;
