import React from "react";
import {
  Image,
  Overlay,
  Button,
} from "reactstrap";

const PosterPreview = ({ movie }) => {
  return (
    <Overlay
      placement="bottom"
      target=".movie-poster"
      show={true}
      zIndex={100}
    >
      <Image src={movie.poster_path} alt={movie.title} />
      <Button onClick={() => console.log("Click")}>
        Подивитись трейлер
      </Button>
    </Overlay>
  );
};
