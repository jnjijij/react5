// moviesActions.js
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your actual TMDB API key

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: 'movies/loading' });
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    dispatch({ type: 'movies/success', payload: response.data.results });
  } catch (error) {
    dispatch({ type: 'movies/error', payload: error.message });
  }
};
