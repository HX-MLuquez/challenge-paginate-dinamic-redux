import {
  GET_ALL_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SEARCH,
  RESET,
  ON_PAGE_CHANGE,
  CART_PER_PAGE,
} from "../Actions/actionTypes";

const initialState = {
  movies: [],
  moviesCopy: [],
  polularMovies: [],
  numPage: 0,
  page_amount: 4,
};

const rootReducer = (state = initialState, { type, payload }) => {
  // console.log("in REDUCERS, type is:", type);
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
        moviesCopy: payload,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        polularMovies: payload,
      };
    case GET_SEARCH:
      const results = state.movies.filter((movie) =>
        movie.Title.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        numPage: 0,
        moviesCopy: results,
      };
    case RESET:
      return {
        ...state,
        moviesCopy: state.movies,
      };
    // ____________________\\
    // *** code Paginate *** \\
    /*\\_______________________//*/
    case ON_PAGE_CHANGE:
      return {
        ...state,
        numPage: payload,
      };
    case CART_PER_PAGE:
      return {
        ...state,
        page_amount: payload,
        numPage: 0,
      };

    default:
      return state;
  }
};

export default rootReducer;
