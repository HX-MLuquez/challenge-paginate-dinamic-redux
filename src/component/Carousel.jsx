import { useState } from "react";
import "./Carousel.css";

import { Link } from "react-router-dom";

const Carousel = ({ popular_movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(popular_movies)
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? popular_movies.length - 4 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === popular_movies.length - 4 ? 0 : currentIndex + 1
    );
  };

  const visibleMovies = popular_movies.slice(currentIndex, currentIndex + 4);

  return (
    <div className="carousel">
      <div className="carousel__cards">
        {visibleMovies &&
          visibleMovies.map((movie) => (
            <div key={movie.imdbID} className="carousel__card">
              <img
                src={`${movie.Poster}`}
                alt={movie.Title}
              />
              <Link className="linki" to={`/detail/${movie.imdbID}`}>
                <h3>{movie.Title.slice(0, 22)}</h3>
              </Link>
              <p>{movie.Year}</p>
            </div>
          ))}
      </div>
      <div className="carousel__controls">
        <button onClick={handlePrev}>&#8249;</button>
        <button onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
