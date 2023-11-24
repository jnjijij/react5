import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../moviesActions';
import { selectMovies, selectMoviesStatus } from '../moviesSlice';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ movies, status, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading movies</p>}
      {status === 'succeeded' && <MoviesList movies={movies} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: selectMovies(state),
  status: selectMoviesStatus(state),
});

const mapDispatchToProps = { fetchMovies };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
