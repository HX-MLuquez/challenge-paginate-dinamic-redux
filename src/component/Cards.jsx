import React from "react";
import Card from "./Card";
import "./Cards.css";
import { useSelector } from "react-redux";

export default function Cards({ movies }) {
  // console.log(movies)
  const { numPage } = useSelector((state) => state);
   // ____________________\\
  // *** code Paginate *** \\
/*\\_______________________//*/ 
  /*
  // Otro modo es tomar el movies original (un array con muchos objetos) y aplicar un slice según el number 
  // del page_amount donde:
  
  const {page_amount} = useSelector((state) => state);
  const moviesOrigin = useSelector((state) => state.movies);
  let desde = numPage * page_amount
  let hasta = (numPage * page_amount) + page_amount
  const moviesSlice = moviesOrigin.slice(desde,hasta)
  // const moviesSlice = moviesOrigin.slice(0,3) // example
  */
  return (
    <div className="cards">
      {/* Importante utilizar el && como así el ? "optional chaining" */}
      {/*// ____________________\\
        // *** code Paginate *** \\
      /*\\_______________________//*/}
     
        {movies && movies[numPage]?.map((movie) => <Card key={movie.imdbID} movie={movie} />)}
    </div>
  );
}
