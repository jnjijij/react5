// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';

const App = () => {
  // Замініть ці посилання на ті, які ви хочете відображати на сторінці фільмів
  const movieLinks = [
    'https://tse1.mm.bing.net/th?&id=OVP.kMye0vSI1D-XIMuWy32qGgHgFo&w=330&h=186&c=7&pid=1.7&rs=1',
    'https://th.bing.com/th?&id=OVP.g9VjHY_C62DSn73e6b7b_gHgFo&w=268&h=150&c=7&pid=2.1&rs=1',
    'https://th.bing.com/th?&id=OVP.P__fr8Tre-GvdgGau7oS7wEsDh&w=268&h=150&c=7&pid=2.1&rs=1',
    'https://th.bing.com/th?&id=OVP.iEua61_vp5rBlGbjg4bhXAHgFo&w=268&h=150&c=7&pid=2.1&rs=1',
    'https://th.bing.com/th?&id=OVP.VCja7n6L2QF0bi6ATO0LHAHgFo&w=268&h=150&c=7&pid=2.1&rs=1',
  ];

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" render={() => <MoviesPage movies={movieLinks} />} />
      </Switch>
    </Router>
  );
};

export default App;
