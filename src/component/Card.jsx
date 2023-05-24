import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
 
  return (
    <div className="card">
      <img
        src={`${movie.Poster}`}
        alt={movie.Title}
        className="card-img"
      />
      <div className="card-info">
        <Link className="linki" to={`/detail/${movie.imdbID}`}>
          <h2 className="card-title">{movie.Title.slice(0, 18)}</h2>
        </Link>
        <p className="card-release">{movie.Year}</p>
        <p className="card-release">{movie.Type}</p>
      </div>
    </div>
  );
}

