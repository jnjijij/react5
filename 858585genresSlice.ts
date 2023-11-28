// genresSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGenre } from './types';

interface GenresState {
  list: IGenre[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  } as GenresState,
  reducers: {
    setGenres: (state, action: PayloadAction<IGenre[]>) => {
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

export const { setGenres, setLoading, setSuccess, setError } = genresSlice.actions;
export const selectGenres = (state: { genres: GenresState }) => state.genres.list;
export const selectGenresStatus = (state: { genres: GenresState }) => state.genres.status;
export default genresSlice.reducer;
