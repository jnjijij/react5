import React, { useState } from "react";
import {
  Card,
  Image,
  Rating,
  Text,
  Badge,
} from "reactstrap";

const MoviesListCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <Image src={movie.poster_path} alt={movie.title} />
      <MovieInfo movie={movie} />
      <div className={isExpanded ? "show" : "hide"}>
        <Row>
          <Col sm="12" md="8">
            <Text>{movie.overview}</Text>
          </Col>
          <Col sm="12" md="4">
            <Badge color="primary">{movie.genres.join(", ")}</Badge>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6">
            <Text>Дата випуску: {movie.release_date}</Text>
          </Col>
          <Col sm="12" md="6">
            <Text>Тривалість: {movie.runtime}</Text>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="4">
            <Button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Згорнути" : "Розгорнути"}
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
