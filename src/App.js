import "./App.css";
import Landing from "./component/Landing";
import Home from "./component/Home";
import Detail from "./component/Detail";
import NavBar from "./component/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import { getAllmovies, getPopularMovies, reset } from "./app/Actions/index";
import { useSelector, useDispatch } from "react-redux";

import cartsPerPage from "./utils/cartsPerPage";

function App() {
  const location = useLocation();

  const dispatch = useDispatch();
  const { moviesCopy } = useSelector((state) => state);
  const { polularMovies } = useSelector((state) => state);
  // ____________________\\
  // *** code Paginate *** \\
  /*\\_______________________//*/
  const { page_amount } = useSelector((state) => state);
 
  const moviesStructure = cartsPerPage(page_amount, moviesCopy)
  const totalPages = moviesStructure.length 


  useEffect(() => {
    dispatch(getAllmovies());
    dispatch(getPopularMovies());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="app">
      <div>{location.pathname === "/" ? null : <NavBar />}</div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Home"
          element={
            <Home
              popular_movies={polularMovies}
              reset={() => dispatch(reset())}
              // ____________________\\
              // *** code Paginate *** \\
              /*\\_______________________//*/
              totalPages={totalPages}
              allMovies={moviesStructure}
            />
          }
        ></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
