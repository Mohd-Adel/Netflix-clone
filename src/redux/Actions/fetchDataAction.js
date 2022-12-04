import * as types from "./types";
import axios from "axios";

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

const fetchMovies = () => {
  return async function (dispatch) {
    dispatch(fetchMoviesStart());
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d432627ae8e5c880a79591dd29bfdffa"
      )
      .then((res) => {
        dispatch(fetchMoviesSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailed(err.message));
      });
  };
};

export default fetchMovies;
