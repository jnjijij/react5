import React from "react";
import { Badge } from "reactstrap";

const GenreBadge = ({ genre }) => {
  return (
    <Badge color="primary">{genre}</Badge>
  );
};
