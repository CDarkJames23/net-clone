import React from "react";

const MovieDetailsBanner = ({
  title,
  poster_path,
  vote_average,
  tagline,
  release_date,
  runtime,
  overview,
}) => {
  return (
    <>
      <div className={title !== "" ? "movie-details" : null}>
        <div className="movie-details__container">
          <img src={poster_path} />
          <div>
            <div className="flex">
              <h2> {title}</h2>
              <span>{vote_average}</span>
            </div>
            <p>{tagline}</p>
            <div className="flex">
              <p> {release_date.slice(0, 4)} </p>
              <p> {runtime} min</p>
            </div>
            <p>{overview}</p>
          </div>
          <p>{prop.tagline}</p>
          <div className="flex">
            <p> {prop.release_date.slice(0, 4)} </p>
            <p> {prop.runtime} min</p>
          </div>
          <p>{prop.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;
