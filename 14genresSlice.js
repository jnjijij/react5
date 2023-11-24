import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setGenres: (state, action) => {
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

export const { setGenres, setLoading, setSuccess, setError } = genresSlice.actions;
export const selectGenres = (state) => state.genres.list;
export const selectGenresStatus = (state) => state.genres.status;
export default genresSlice.reducer;
