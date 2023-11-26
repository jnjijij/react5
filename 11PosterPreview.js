import React from "react";
import { Image } from "reactstrap";

const PosterPreview = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} fluid />
  );
};
