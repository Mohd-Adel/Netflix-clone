import React, { useEffect } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Carosel from "./carosel";
import { connect, useDispatch, useSelector } from "react-redux";
import fetchMovies from "../redux/Actions/fetchDataAction";
import CarouselTop from "./CarouselTop";
import fetchGenres from "../redux/Actions/fetchGenresAction";
import CaroselNetflix from "./caroselNetflix";

const Main = (props) => {
  const { moviesList, stat, coverMovie, genres } = useSelector((state) => {
    return {
      moviesList: state.movies.moviesList,
      stat: state.movies.stat,
      coverMovie: state.movies.coverMovie,
      genres: state.movies.genres
    };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (stat !== 200 && !moviesList) {
      dispatch(fetchMovies());
      dispatch(fetchGenres());
    }
  });

  if (props.movies.stat === 200 && coverMovie) {
    return (
      <div className="main">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${coverMovie.backdrop_path}`}
            alt="logo"
            className="bg-cover fluid w-100 position-absolute"
            style={{
              height: "100vh"
            }}
          />
        </div>

        <div className="container main-content position-relative fs-2 ">
          <p>Daily Picks For You . THis is Fake Netflix</p>
          <p>{coverMovie.title}</p>
          <p
            className="movie-overview"
            style={{ height: "15vh", overflow: "hidden" }}
          >
            {coverMovie.overview.split(".")[0]}
          </p>
          <div>
            <button type="button" className="btn btn-light me-3">
              <FontAwesomeIcon icon={faPlay} className="mx-2" />
              Play
            </button>
            <button type="button" className="btn btn-secondary">
              <FontAwesomeIcon icon={faInfoCircle} className="mx-2" />
              More Info
            </button>
          </div>
          <CarouselTop title={"Trending Movies"} url={"movie/trending"} />
          <Carosel title={"Only on Netflix"} url={"movie/trending"} />
          {genres
            ? genres.map((genre) => {
                return (
                  <Carosel
                    key={genre.id}
                    title={genre.name}
                    genreID={genre.id}
                  />
                );
              })
            : ""}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

// const mapDispatchToProps = (dispatch) => {
//   fetchMovies: dispatch(fetchMovies());
// };

export default connect(mapStateToProps)(Main);
