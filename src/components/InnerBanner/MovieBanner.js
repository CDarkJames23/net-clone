import React from "react";

const MovieBanner = (prop) => {
  return (
    <div className="movie-details__container">
      <img
        src={prop.poster_path}
        alt={prop.title}
        onError={() => prop.broken}
      />
      <div>
        <div className="flex">
          <h2> {prop.title}</h2>
          <span> {prop.vote_average}</span>
        </div>
        <p>{prop.tagline}</p>
        <div className="flex movie-details__date-runtime">
          <p> {prop.release_date.slice(0, 4)} </p>
          <p> {prop.runtime}</p>
        </div>
        <p>{prop.overview}</p>
      </div>
    </div>
  );
};

export default MovieBanner;
