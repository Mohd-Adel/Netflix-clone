import * as types from "./types";
import getPopular from "../../APIs/getData";

const fetchMoviesStart = () => ({
  type: types.fetchMoviesStartType
});

const fetchMoviesSuccess = (movies) => ({
  type: types.fetchMoviesSuccessType,
  payload: movies
});

const fetchMoviesFailed = (error) => ({
  type: types.fetchMoviesFailedType,
  payload: error
});

const getAllMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    await dispatch(fetchMoviesSuccess(getPopular()));
  } catch (e) {
    fetchMoviesFailed(e);
  }
};

export default getAllMovies;
