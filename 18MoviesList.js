import React from 'react';
import MoviesListCard from './MoviesListCard';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie) => (
          <MoviesListCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
