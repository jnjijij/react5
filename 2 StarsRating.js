import React, { useState } from "react";

const StarsRating = ({ movie }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Rating
        name="rating"
        value={rating}
        onChange={(value) => setRating(value)}
        readonly
      />
      <Text>{movie.vote_average}</Text>
    </div>
  );
};
