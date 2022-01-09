import React, { useState } from "react";
import { useNavigate } from "react-router";

import MovieForm from "./MovieForm";

const NewMovie = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate= useNavigate()

  const saveMovieDataHandler = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Math.random().toString(),
    };
    props.onAddMovie(movieData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    // setIsEditing(true);
    navigate('/add-movie')
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <button onClick={startEditingHandler} className="button-main add-button">
        add movie
      </button>
      {/* {isEditing && (
        <MovieForm
          onSaveMovieData={saveMovieDataHandler}
          onCancel={stopEditingHandler}
        />
      )} */}
    </div>
  );
};

export default NewMovie;
