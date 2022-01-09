import {
  COUNT,
  SEARCH,
  FILTER_MOVIE,
  VISIBLE,
  FILTER_ID,
  MOVIES_SORTED,
  REMOVE_MOVIE,
  ADD_MOVIE,
  NEW_MOVIE,
  RESET,
} from "./actionTypes";

export const count = () => {
  return {
    type: COUNT,
  };
};

export const resetMovie = () => {
  return {
    type: RESET,
  };
};

export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

export const newMovie = (movie) => {
  return {
    type: NEW_MOVIE,
    payload: movie,
  };
};

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

export const searchMovieTitle = (filter) => {
  return {
    type: SEARCH,
    payload: filter,
  };
};

export const filterMovie = (filter) => {
  return {
    type: FILTER_MOVIE,
    payload: filter,
  };
};

export const moviesSorted = (filter) => {
  return {
    type: MOVIES_SORTED,
    payload: filter,
  };
};

export const filterId = (filter) => {
  return {
    type: FILTER_ID,
    payload: filter,
  };
};

export const visibility = () => {
  return {
    type: VISIBLE,
  };
};
