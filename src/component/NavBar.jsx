import React, { useState } from "react";
import "./NavBar.css";
import { useDispatch } from "react-redux";

import { getMovieSearch } from "../app/Actions";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con el valor de búsqueda
    dispatch(getMovieSearch(searchValue))
    // console.log("Valor de búsqueda:", searchValue);
    setSearchValue("")
  };

  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchSubmit} type="submit">
          Search
        </button>
      </div>
    </nav>
  );
}
