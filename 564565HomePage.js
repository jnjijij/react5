// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container home-page">
    <h1>Home Page</h1>
    <Link to="/movies" className="link">
      Go to Movies
    </Link>
  </div>
);

export default HomePage;
