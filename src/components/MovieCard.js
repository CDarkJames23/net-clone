import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filterId, removeMovie } from "../store/actionCreators";

const MovieCard = (prop) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card"
      // onClick={() =>
      //   dispatch(
      //     filterId({
      //       title: prop.title,
      //       poster_path: prop.poster_path,
      //       vote_average: prop.vote_average,
      //       tagline: prop.tagline,
      //       genres: prop.genres,
      //       overview: prop.overview,
      //       release_date: prop.release_date,
      //       runtime: prop.runtime,
      //     })
      //   )
      // }
    >
      <img
        className="card-image"
        src={prop.poster_path}
        alt={prop.title}
        onError={prop.broken}
      />
      <div className="card-details">
        <div>
          <h4>{prop.title}</h4>
          <p> {prop.genres}</p>
        </div>

        <button>{prop.release_date.slice(0, 4)}</button>
      </div>
      <button onClick={() => dispatch(removeMovie(prop.id))}>
        remove movie
      </button>

      {/* <button onClick={() => prop.function(prop.movie)}>useState</button> */}
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
