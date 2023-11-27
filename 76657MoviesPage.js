// MoviesPage.js
import React from 'react';

const MoviesPage = ({ movies }) => (
  <div>
    <h2>Movies</h2>
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          <img src={movie} alt={`Movie ${index + 1}`} />
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesPage;
