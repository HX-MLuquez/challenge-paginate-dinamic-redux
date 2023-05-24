import {
  GET_ALL_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SEARCH,
  RESET,
  ON_PAGE_CHANGE,
  CART_PER_PAGE,
} from "../Actions/actionTypes";
import { moviesDb, popularMoviesDb } from "../../utils/moviesDb";

export function getAllmovies() {
  try {
    // console.log("01",moviesDb)
    return {
      type: GET_ALL_MOVIES,
      payload: moviesDb,
    };
  } catch (err) {
    console.log(err);
  }
}

export function getPopularMovies() {
  try {
    return {
      type: GET_POPULAR_MOVIES,
      payload: popularMoviesDb,
    };
  } catch (err) {
    console.log(err);
  }
}

export function getMovieSearch(title) {
  try {
    return {
      type: GET_SEARCH,
      payload: title,
    };
  } catch (err) {
    console.log(err);
  }
}

export function reset() {
  try {
    return {
      type: RESET,
    };
  } catch (err) {
    console.log(err);
  }
}

// ____________________\\
// *** code Paginate *** \\
/*\\_______________________//*/
export function onPageChange(currentPage) {
  try {
    return {
      type: ON_PAGE_CHANGE,
      payload: currentPage,
    };
  } catch (error) {}
}

export function cartPerPage(currentPage) {
  try {
    return {
      type: CART_PER_PAGE,
      payload: parseInt(currentPage),
    };
  } catch (error) {}
}
