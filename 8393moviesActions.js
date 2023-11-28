// moviesActions.js

// ... (other imports)
import axios from 'axios';
import { setMovies, setLoading, setSuccess, setError } from './moviesSlice';

const YOUR_MOVIES_API_ENDPOINT = 'YOUR_ACTUAL_API_ENDPOINT';

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`${YOUR_MOVIES_API_ENDPOINT}/movies`);
    dispatch(setMovies(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
