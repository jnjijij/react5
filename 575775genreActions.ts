// genreActions.ts
import axios from 'axios';
import { AppThunk } from './store'; // Assuming you have a store file
import { setGenres, setLoading, setSuccess, setError } from './genresSlice';

const GENRES_API_ENDPOINT = 'https://api.example.com/genres'; // Replace with your actual genres API endpoint

export const fetchGenres = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get<IGenre[]>(`${GENRES_API_ENDPOINT}`);
    dispatch(setGenres(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
