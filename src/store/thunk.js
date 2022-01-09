import { LOAD_MOVIES } from "./actionTypes";

export const loadMovies = () => async (dispatch) => {
  const apiLink = "https://mocki.io/v1/0fdc4d19-d492-457a-a07b-0c3f659c668c";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES,
    payload: moviesData.data,
  });
};

