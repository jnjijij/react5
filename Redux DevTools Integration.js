// In your store configuration
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
}, composeWithDevTools());
