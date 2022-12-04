import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import getSelectedMovie from "../redux/Actions/getSelectedMovie";
import { useEffect, useState } from "react";
import "./carosel.css";
import axios from "axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Carosel(props) {
  const [coverIndex, setCoverIndex] = useState(0);

  const [trailer, setTrailer] = useState(null);

  const [arrMovies, setArrMovies] = useState(null);

  const [stylex, setStylex] = useState("");

  const { moviesList, coverMovie, allMovies } = useSelector((state) => {
    return {
      moviesList: state.movies.moviesList,
      coverMovie: state.movies.coverMovie,
      allMovies: state.movies.allMovies
    };
  });

  const dispatch = useDispatch();
  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d432627ae8e5c880a79591dd29bfdffa&sort_by=popularity.desc&include_video=true&page=1&with_genres=${props.genreID}`
    );
    setArrMovies(data.results);
  };
  useEffect(() => {
    if (arrMovies) return;
    getMovies();
  });

  useEffect(() => {
    if (trailer) {
      window.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          setTrailer(null);
        },

        [trailer]
      );
    }
  });

  const clickHandler = (movie, i) => {
    setStylex("border2");
    trailer
      ? setTrailer(null)
      : movieTrailer(movie.title).then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        });
  };

  if (!arrMovies) return;
  if (!moviesList) return;
  return (
    <div className="container">
      <div className="movies-type">{props.title}</div>
      <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={5}
        items={5}
        autoWidth={false}
        startPosition={coverIndex}
        slideBy={5}
        nav
        dots={false}
        animateIn={true}
        animateOut={true}
        center={false}
        lazyLoad={true}
        autoplay={false}
        style={{ width: "100%" }}
      >
        {arrMovies.map((movie, i) => {
          return (
            <div className={`item`} key={movie.id}>
              <hr />
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                alt={movie.title}
                className={`${movie === coverMovie ? stylex : ""}  thumb`}
                style={{
                  width: "100%"
                }}
                onClick={() => {
                  clickHandler(movie, i);
                }}
              />

              {/*
              <h4>
                {movie.original_title
                  ? movie.original_title
                  : movie.original_name}
              </h4> */}
            </div>
          );
        })}
      </OwlCarousel>
      {trailer && (
        // <YouTube
        //   videoId={trailer}
        //   opts={opts}
        //   onReady={_onReady}
        //   autoplay
        //   allowPresentation
        // />
        <iframe
          id={trailer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&origin=http://localhost:3000`}
          frameBorder="0"
          title={trailer}
          allow="autoplay"
        ></iframe>
      )}
    </div>
  );
}

export default Carosel;
