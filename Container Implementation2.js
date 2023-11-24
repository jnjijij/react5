// MoviesPage.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/moviesActions';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ movies, getMovies }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <h1>Movies Page</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getMovies })(MoviesPage);
