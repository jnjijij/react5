import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';
import genreReducer from './reducers/genreReducer';
import MoviesPage from './containers/MoviesPage';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <MoviesPage />
        {/* Other components */}
      </div>
    </Provider>
  );
}

export default App;
