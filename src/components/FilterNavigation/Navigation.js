import React from "react";
import FilterNavigation from "./FilterNavigation";
import SortFilter from "./SortFilter";

const Navigation = (prop) => {
  return (
    <div className="flex" style={{ justifyContent: "space-between" }}>
      <FilterNavigation
        all={prop.all}
        action={prop.action}
        fantasy={prop.fantasy}
        drama={prop.drama}
        crime={prop.crime}
      />
      <SortFilter arrangeMovies={prop.arrangeMovies} />
    </div>
  );
};

export default Navigation;
