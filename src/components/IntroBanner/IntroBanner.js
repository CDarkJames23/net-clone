import React from "react";

const IntroBanner = (prop) => {
  return (
    <div className="inner-banner">
      <h1>FIND YOUR MOVIE</h1>
      <form>
        <input
          type="text"
          placeholder="What do you want to watch"
          value={prop.myValue}
          onChange={prop.myFunction}
        />
        <button type="submit" className="button-main">
          search
        </button>
      </form>
    </div>
  );
};

export default IntroBanner;
