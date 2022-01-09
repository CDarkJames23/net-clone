import { useSelector } from "react-redux";

export const movieGenreFilterSelector = useSelector(
  (state) => state.filterMovie
);
export const apiMoviesArraySelector = useSelector((state) => state.movies);
export const movieArraySearchSelector = useSelector(
  (state) => state.searchFilter
);
