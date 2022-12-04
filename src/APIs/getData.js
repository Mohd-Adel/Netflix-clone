import axios from "axios";
import { api_key } from "./API_KEY";

// const trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=";

const moviesReq = async (url) => {
  try {
    const req = axios.create({
      baseURL: " https://api.themoviedb.org/3",
      params: { api_key }
    });

    const { data } = req.get(url);

    return data;
  } catch (e) {
    console.log(e);
  }
};
const getTrending = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d432627ae8e5c880a79591dd29bfdffa"
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getNowPlaying = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d432627ae8e5c880a79591dd29bfdffa&language=en-US&page=1"
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getPopular = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d432627ae8e5c880a79591dd29bfdffa&language=en-US&page=1"
    );
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getGenres = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d432627ae8e5c880a79591dd29bfdffa&language=en-US"
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getImage = async (url) => {
  try {
    const image = await axios.create({
      baseURL: "http://image.tmdb.org/t/p/"
    });

    const { data } = image.get(url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default (moviesReq,
getTrending,
getNowPlaying,
getPopular,
getGenres,
getImage);
