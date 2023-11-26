import React from "react";
import { Image, Rating, Text, Badge } from "reactstrap";

const MoviesListCard = ({ movie }) => {
  return (
    <Card>
      <Image src={movie.poster_path} alt={movie.title} />
      <MovieInfo movie={movie} />
    </Card>
  );
};
