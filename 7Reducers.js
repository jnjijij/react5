// moviesReducer.js
const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'movies/loading':
      return { ...state, status: 'loading' };
    case 'movies/success':
      return { ...state, status: 'succeeded', movies: action.payload, error: null };
    case 'movies/error':
      return { ...state, status: 'failed', error: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
