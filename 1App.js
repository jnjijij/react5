import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";

const App = () => {
  return (
    <div>
      <Header />
      <MoviesList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));