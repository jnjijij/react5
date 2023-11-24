// genreReducer.js
const initialState = {
  genres: [],
  status: 'idle',
  error: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'genres/loading':
      return { ...state, status: 'loading' };
    case 'genres/success':
      return { ...state, status: 'succeeded', genres: action.payload, error: null };
    case 'genres/error':
      return { ...state, status: 'failed', error: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
