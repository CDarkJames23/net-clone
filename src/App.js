import React, { useEffect } from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import EditMovie from "./components/FormikMovieForms/EditMovie";
import FormikAddMovie from "./components/FormikMovieForms/FormikAddMovie";
import { useDispatch } from "react-redux";
import { loadMovies } from "./store/thunk";

const App = () => {
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>
            <li>
              <Link to="/edit-movie">Edit Movie</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-movie" element={<FormikAddMovie />} />
          <Route path="/edit-movie" element={<EditMovie />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
