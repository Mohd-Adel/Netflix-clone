import React from "react";

function MovieCard(props) {
  return (
    <div>
      <div className="card movie-card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w1280/${props.hoverMovie.poster_path}`}
          alt={props.hoverMovie.title}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div className="card-body">
          <a href="/" className="card-link">
            Card link
          </a>
          <a href="/" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
