// MoviesList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/moviesActions';
import MoviesListCard from './MoviesListCard';

const MoviesList = ({ movies, getMovies }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <h2>Movies List</h2>
      {movies.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getMovies })(MoviesList);
