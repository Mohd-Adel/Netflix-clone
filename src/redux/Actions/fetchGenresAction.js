import * as types from "./types";
import axios from "axios";

const fetchGenresAction = (genres) => {
  return {
    type: types.fetchGenres,
    payload: genres.genres
  };
};

const fetchGenres = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d432627ae8e5c880a79591dd29bfdffa&language=en-US"
  );
  console.log(data);
  await dispatch(fetchGenresAction(data));
};

export default fetchGenres;
