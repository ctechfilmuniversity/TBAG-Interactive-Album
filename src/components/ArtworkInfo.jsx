import React from "react";
import { Link } from "react-router-dom";

const ArtworkInfo = ({ title, artist, subtitle, description, id }) => (
  <Link to={`/sketch-detail/${id}`}>
    <div className="artwork-info">
    <h1 className="artwork-title">{title}</h1>
    <h2 className="artwork-artist">{artist}</h2>
    <h3 className="artwork-subtitle">{subtitle}</h3>
    <p className="artwork-description">{description}</p>
  </div>

  </Link>
  
);

export default ArtworkInfo;
