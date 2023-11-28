// moviesActions.ts
import axios from 'axios';
import { AppThunk } from './store'; // Assuming you have a store file
import { setMovies, setLoading, setSuccess, setError } from './moviesSlice';

const MOVIES_API_ENDPOINT = 'https://api.example.com/movies'; // Replace with your actual movies API endpoint

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get<IMovie[]>(`${MOVIES_API_ENDPOINT}`);
    dispatch(setMovies(response.data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
