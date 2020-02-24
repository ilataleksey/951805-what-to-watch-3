import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <SmallMovieCard
            key={film.name}
            film={film}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
