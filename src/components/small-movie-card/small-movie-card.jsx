import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../vidoe-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {film, onCardHover} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onCardHover}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          poster={film.poster}
          preview={film.preview}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
