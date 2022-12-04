import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
// import selectedMovieReducer from "./selectedMovieReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer
  //   coverMovie: selectedMovieReducer
});
