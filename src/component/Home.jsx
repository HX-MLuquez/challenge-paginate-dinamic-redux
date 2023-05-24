import React, { useState } from "react";

import Carousel from "./Carousel";
import Cards from "./Cards";

import "./Home.css";
import Paginate from "./Paginate";

import { useDispatch } from "react-redux";
import { cartPerPage } from "../app/Actions/index";

export default function Home({ popular_movies, allMovies, reset, totalPages }) {
  // useState("") -> se debe a que los componentes controlados requieren un valor inicial definido

  // ____________________\\
  // *** code Paginate *** \\
  /*\\_______________________//*/
  const [numCartPerPage, setNumCartPerPage] = useState("");
  const dispatch = useDispatch();

  const handleNumInputChange = (event) => {
    setNumCartPerPage(event.target.value);
  };

  const handleNumSubmit = (event) => {
    event.preventDefault();
    dispatch(cartPerPage(numCartPerPage));
    setNumCartPerPage("");
  };
  return (
    <div className="home">
      <div>
        <h3>Popular Movies</h3>
        <Carousel popular_movies={popular_movies}></Carousel>
      </div>
      <div className="selectors_sector">
        <button onClick={reset}>
          <h3>All movies</h3>
        </button>
        <div>
          {/*// ____________________\\
            // *** code Paginate *** \\
            \\_______________________//*/}
          <input
            type="text"
            placeholder="Number of cards per page..."
            value={numCartPerPage}
            onChange={handleNumInputChange}
          />
          <button onClick={handleNumSubmit} type="submit">
            Cards per page
          </button>
          {/* ---------------------------------- */}
        </div>
      </div>
      <div>
        <Cards movies={allMovies}></Cards>
      </div>
      <Paginate totalPages={totalPages}></Paginate>
    </div>
  );
}
