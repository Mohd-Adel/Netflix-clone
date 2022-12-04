import { selectedMovie } from "./types";

const getSelectedMovieAction = (movie) => {
  return {
    type: selectedMovie,
    payload: movie
  };
};

const getSelectedMovie = (movie) => async (dispatch) => {
  await dispatch(getSelectedMovieAction(movie));
};

export default getSelectedMovie;
