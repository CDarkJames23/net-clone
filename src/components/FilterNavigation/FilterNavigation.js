import React from "react";
import { useDispatch } from "react-redux";
import { filterMovie } from "../../store/actionCreators";

const FilterNavigation = (prop) => {
  const dispatch = useDispatch();
  return (
    <div className="filter-navigation">
      FILTER
      <button onClick={() => dispatch(filterMovie(prop.all))}>All</button>
      <button onClick={() => dispatch(filterMovie(prop.fantasy))}>
        Fantasy
      </button>
      <button onClick={() => dispatch(filterMovie(prop.drama))}>Drama</button>
      <button onClick={() => dispatch(filterMovie(prop.crime))}>Crime</button>
      <button onClick={() => dispatch(filterMovie(prop.action))}>Action</button>
    </div>
  );
};

export default FilterNavigation;
