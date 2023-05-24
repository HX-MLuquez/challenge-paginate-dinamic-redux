import React, { useState, useEffect } from "react";
import "./Detail.css";

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const path = useParams(); // {detailId: '772071'}
  // console.log(path);
  const { movies } = useSelector((state) => state);
  const [detail, setDetail] = useState("");

  const getDetail = function () {
    const detailMovie = movies?.find((m) => m.imdbID === path.detailId);
    setDetail(detailMovie);
    // console.log(detailMovie.data);
  };

  useEffect(() => {
    getDetail();
    /* eslint-disable react-hooks/exhaustive-deps */
    // Esta línea evita la advertencia:
    // React Hook useEffect has a missing dependency: 'dispatch'.
    // Either include it or remove the dependency array
  }, []);

  return (
    <div className="movieDetail">
      <Link to="/home">
        <button className="button">Back</button>
      </Link>
      <img
        src={detail.Poster}
        alt={detail.Title}
        className="movieDetail__poster"
      />
      <div className="movieDetail__info">
        <h1 className="movieDetail__title">{detail.Title}</h1>
        <div className="movieDetail__meta">
          <span className="movieDetail__releaseDate">{detail.Year}</span>
        </div>
        <p className="movieDetail__description">{detail.Type}</p>
      </div>
    </div>
  );
}
