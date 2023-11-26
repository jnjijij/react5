import React from "react";
import { Rating } from "reactstrap";

const StarsRating = ({ rating }) => {
  return (
    <Rating value={rating} />
  );
};
