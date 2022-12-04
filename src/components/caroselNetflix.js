import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import getSelectedMovie from "../redux/Actions/getSelectedMovie";
import { useEffect, useState } from "react";
import "./carosel.css";
import { AnimateSharedLayout } from "framer-motion";
import axios from "axios";

function CaroselNetflix(props) {
  const [coverIndex, setCoverIndex] = useState(0);

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
      "https://api.themoviedb.org/3/discover/tv?api_key=d432627ae8e5c880a79591dd29bfdffa&language=en-US&region=US&sort_by=popularity.desc&networks=Netflix"
    );
    console.log(data);
    setArrMovies(data.results);
  };
  useEffect(() => {
    if (arrMovies) return;
    getMovies();
  });
  console.log(allMovies);

  const clickHandler = (movie, i) => {
    dispatch(getSelectedMovie(movie));
    setCoverIndex(i);
    setStylex("border2");
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
        <AnimateSharedLayout>
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
        </AnimateSharedLayout>
      </OwlCarousel>
    </div>
  );
}

export default CaroselNetflix;
