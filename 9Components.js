// MoviesListCard.js
import React from 'react';
import StarsRating from './StarsRating';
import GenreBadge from './GenreBadge';

const MoviesListCard = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    <p>{movie.overview}</p>
    <StarsRating rating={movie.vote_average} />
    {movie.genre_ids.map((genreId) => (
      <GenreBadge key={genreId} genreId={genreId} />
    ))}
  </div>
);

export default MoviesListCard;
