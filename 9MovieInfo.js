import React from "react";
import { Text, Badge } from "reactstrap";

const MovieInfo = ({ movie }) => {
  return (
    <Row>
      <Col sm="12" md="8">
        <Text>{movie.title}</Text>
        <Text>{movie.overview}</Text>
      </Col>
      <Col sm="12" md="4">
        <Badge color="primary">{movie.genres.join(", ")}</Badge>
      </Col>
    </Row>
  );
};
