import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import MovieBanner from "../components/InnerBanner/MovieBanner";
import Navigation from "../components/FilterNavigation/Navigation";
import {
  moviesSorted,
  removeMovie,
} from "../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../store/thunk";

const Home = () => {
  const [display, setDisplay] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const FilterIdSelector = useSelector((state) => state.id);
  const sortCriteriaSelector = useSelector((state) => state.sortCriteria);
  const movieGenreFilterSelector = useSelector((state) => state.filterMovie);
  const apiMoviesArraySelector = useSelector((state) => state.movies);
  const movieArraySearchSelector = useSelector((state) => state.searchFilter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMovies());
  // }, []);

  const sortMovies = (x) => {
    if (x === "newest-date") {
      const result = [apiMoviesArraySelector].sort((a, b) => {
        const dateA = new Date(a.release_date).getYear();
        const dateB = new Date(b.release_date).getYear();
        if (dateA < dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
      dispatch(moviesSorted(result));
      console.log(sortCriteriaSelector);
      // setMovies(result);
    }
    if (x === "oldest-date") {
      const result = [...movies].sort((a, b) => {
        const dateA = new Date(a.release_date).getYear();
        const dateB = new Date(b.release_date).getYear();
        if (dateA > dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });
      dispatch(moviesSorted(result));
      console.log(sortCriteriaSelector);

      // setMovies(result);
    }
    if (x === "title") {
      const result = [...movies].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
      dispatch(moviesSorted(result));

      // setMovies(result);
    }
  };

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const compare=( a, b )=> {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }

  return (
    <>
      <div className={FilterIdSelector.title !== "" ? "hide" : "banner"}>
        <InnerBanner
          searchTerm={searchTerm}
          onAddMovie={addMovieHandler}
          close={handleDisplay}
        />
      </div>
      {/* <div onClick={deletePost(354912)}>test test delete</div> */}

      <div className={FilterIdSelector.title !== "" ? "movie-details" : null}>
        <MovieBanner
          title={FilterIdSelector.title}
          vote_average={FilterIdSelector.vote_average}
          poster_path={FilterIdSelector.poster_path}
          tagline={FilterIdSelector.tagline}
          genres={FilterIdSelector.genres}
          release_date={FilterIdSelector.release_date.slice(0, 4)}
          runtime={FilterIdSelector.runtime}
          overview={FilterIdSelector.overview}
          id={FilterIdSelector.id}
          broken={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
          }
        />
      </div>
      <Navigation
        all=""
        action="Action"
        fantasy="Fantasy"
        drama="Drama"
        crime="Crime"
        arrangeMovies={(event) => sortMovies(event.target.value)}
      />

      <div className="card-layout">
        {apiMoviesArraySelector.map((movie) =>
          movie
            .filter((data) => {
              if (movieArraySearchSelector === "") {
                return data;
              } else if (
                data.title
                  .toLowerCase()
                  .includes(movieArraySearchSelector.toLowerCase())
              ) {
                return data;
              }
              return null;
            })
            .filter((data) => {
              if (movieGenreFilterSelector === "") {
                return data;
              } else if (data.genres.includes(movieGenreFilterSelector)) {
                return data;
              }
              return null;
            })
            .slice(0, 10)
            // .sort((a, b)=> b.release_date - a.release_date)
            .sort(compare)
            .map((m) => (
              <MovieCard
                key={m.id}
                id={m.id}
                title={m.title}
                poster_path={m.poster_path}
                genres={m.genres.map((g) => (
                  <span key={g}>{g} /</span>
                ))}
                release_date={m.release_date}
                vote_average={m.vote_average}
                overview={m.overview}
                movie={movie}
                runtime={m.runtime}
                broken={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
                }
              />
            ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
