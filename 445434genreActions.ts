// genreActions.ts
import axios from 'axios';
import { AppThunk } from './store';
import { setGenres, setLoading, setSuccess, setError } from './genresSlice';

const GENRES_API_ENDPOINT = process.env.REACT_APP_GENRES_API_ENDPOINT || '';

export const fetchGenres = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get<IGenre[]>(GENRES_API_ENDPOINT);
    dispatch(setGenres(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
