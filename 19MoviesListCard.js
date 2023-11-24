import React from 'react';

const MoviesListCard = ({ movie }) => {
  return (
    <li>
      {movie.title} - {movie.genre}
    </li>
  );
};

export default MoviesListCard;
