import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, newMovie, resetMovie } from "../../store/actionCreators";

const MovieForm = (props) => {
  const MovieTitleSelector = useSelector((state) => state.newMovie.title);
  const MovieReleaseDateSelector = useSelector(
    (state) => state.newMovie.release_date
  );
  const MoviePosterPathSelector = useSelector(
    (state) => state.newMovie.poster_path
  );
  const MovieGenresSelector = useSelector((state) => state.newMovie.genres);
  const MovieRuntimeSelector = useSelector((state) => state.newMovie.runtime);

  const MovieOverviewSelector = useSelector((state) => state.newMovie.overview);
  const newMovieStore= useSelector((state) => state.newMovie);

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <div className="form">
        {MovieTitleSelector}
        <button onClick={props.onCancel}>X</button>
        <h1>Add Movie</h1>

        <form onSubmit={(e) => {
          e.preventDefault()
          newMovieStore.genres=[newMovieStore.genres]
          newMovieStore.id= Math.random().toString()
          console.log(newMovieStore)
          dispatch(addMovie(newMovieStore))
        }} className="form__content">
          <div className="form__contact-field-box">
            <div>
              <label>title</label>
              <br />

              <input
                type="text"
                className="form__input"
                placeholder="Title"
                value={MovieTitleSelector}
                onChange={(e) =>
                  dispatch(newMovie({ ...newMovieStore, title: e.target.value }))
                }
              />
            </div>
            <select
              onChange={(e) =>
                dispatch(newMovie({ ...newMovieStore, genres: e.target.value }))
              }
              value={MovieGenresSelector}
            >
              <option></option>
              <option value={["horror"]}>Horror</option>

              <option value="drama">Drama</option>
            </select>

            <label htmlFor="release_date">Release Date</label>
            <br />

            <input
              type="text"
              name="release-date"
              id="title"
              className="form__input"
              placeholder="Release Date"
              value={MovieReleaseDateSelector}
              onChange={(e) =>
                dispatch(
                  newMovie({ ...newMovieStore, release_date: e.target.value })
                )
              }
            />

            <label htmlFor="poster_path">Movie URL</label>
            <br />
            <input
              type="text"
              name="movie-url"
              className="form__input"
              placeholder="Movie Url Here"
              value={MoviePosterPathSelector}
              onChange={(e) =>
                dispatch(newMovie({ ...newMovieStore, poster_path: e.target.value }))
              }
            />

            <label htmlFor="overview">Overview</label>
            <br />

            <input
              type="text"
              name="overview"
              placeholder="Overview"
              className="form__input"
              value={MovieOverviewSelector}
              onChange={(e) =>
                dispatch(newMovie({ ...newMovieStore, overview: e.target.value }))
              }
            />

            <label htmlFor="runtime">Runtime</label>
            <br />

            <input
              type="number"
              name="runtime"
              placeholder="Runtime"
              className="form__input"
              value={MovieRuntimeSelector}
              onChange={(e) =>
                dispatch(newMovie({ ...newMovieStore, runtime: e.target.value }))
              }
            />
            <div className="button-area">
              <button
              type="reset"
                className="button-secondary"
                onClick={() => {
                  dispatch(resetMovie());
                }}
              >
                reset
              </button>
              <button className="button-main" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
