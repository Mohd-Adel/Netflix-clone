import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import getSelectedMovie from "../redux/Actions/getSelectedMovie";
import { useState } from "react";
import "./carosel.css";
import { AnimateSharedLayout } from "framer-motion";

function CarouselTop(props) {
  const [coverIndex, setCoverIndex] = useState(0);

  const [stylex, setStylex] = useState("");

  const { moviesList, coverMovie } = useSelector((state) => {
    return {
      moviesList: state.movies.moviesList,
      coverMovie: state.movies.coverMovie
    };
  });

  const dispatch = useDispatch();

  const clickHandler = (movie, i) => {
    dispatch(getSelectedMovie(movie));
    setCoverIndex(i);
    setStylex("border2");
  };

  // const mouseHoverHandler = (movie, isHovered) => {
  //   console.log(movie);
  //   return (
  //     <div className="card movie-card">
  //       <img
  //         className="card-img-top"
  //         src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
  //         alt={movie.title}
  //       />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </p>
  //       </div>

  //       <div className="card-body">
  //         <a href="/" className="card-link">
  //           Card link
  //         </a>
  //         <a href="/" className="card-link">
  //           Another link
  //         </a>
  //       </div>
  //     </div>
  //   );
  // };

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
          {moviesList.map((movie, i) => {
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

export default CarouselTop;
