// moviesActions.ts
import axios from 'axios';
import { AppThunk } from './store';
import { setMovies, setLoading, setSuccess, setError } from './moviesSlice';

const MOVIES_API_ENDPOINT = process.env.REACT_APP_MOVIES_API_ENDPOINT || '';

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get<IMovie[]>(MOVIES_API_ENDPOINT);
    dispatch(setMovies(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
