import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setMovies, setLoading, setSuccess, setError } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.list;
export const selectMoviesStatus = (state) => state.movies.status;
export default moviesSlice.reducer;
