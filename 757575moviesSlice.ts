// moviesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from './types';

interface MoviesState {
  list: IMovie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  } as MoviesState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.list = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setMovies, setLoading, setSuccess, setError } = moviesSlice.actions;
export const selectMovies = (state: { movies: MoviesState }) => state.movies.list;
export const selectMoviesStatus = (state: { movies: MoviesState }) => state.movies.status;
export default moviesSlice.reducer;
