import axios from 'axios';
import { setGenres, setLoading, setSuccess, setError } from './genresSlice';

const YOUR_GENRES_API_ENDPOINT = 'YOUR_ACTUAL_API_ENDPOINT';

export const fetchGenres = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`${YOUR_GENRES_API_ENDPOINT}/genres`);
    dispatch(setGenres(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
