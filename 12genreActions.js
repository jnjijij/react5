// genreActions.js
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your actual TMDB API key

export const getGenres = () => async (dispatch) => {
  try {
    dispatch({ type: 'genres/loading' });
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    dispatch({ type: 'genres/success', payload: response.data.genres });
  } catch (error) {
    dispatch({ type: 'genres/error', payload: error.message });
  }
};
