// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import genresReducer from './reducers/genreReducer';
import MoviesPage from './containers/MoviesPage';
import Header from './components/Header';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={MoviesPage} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
