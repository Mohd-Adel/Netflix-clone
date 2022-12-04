import * as types from "./types";
import axios from "axios";

const genreMoviesAction = (movies, genreId) => {
  return {
    type: types.fetchGenresMovies,
    payload: movies,
    gen: genreId
  };
};

const fetchGenreMovies = (genreId) => async (dispatch) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=d432627ae8e5c880a79591dd29bfdffa&sort_by=popularity.desc&include_video=true&page=1&with_genres=${genreId}`
  );
  //   dispatch(genreMoviesAction(data.results));
  return data.results;
};

export default fetchGenreMovies;
