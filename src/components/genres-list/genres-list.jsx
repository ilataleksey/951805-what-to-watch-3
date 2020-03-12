import React from "react";
import PropTypes from "prop-types";
import films from "../../mocks/films.js";
import {ALL_GENRES} from "../../reducer.js";

const GenresList = (props) => {
  const {filteredGenre, onGenreChange} = props;
  const genres = new Set();
  films.map((film) => {
    return (
      genres.add(film.genre)
    );
  });

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${filteredGenre === ALL_GENRES ? `catalog__genres-item--active` : ``}`}>
        <a href="#"
          className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            onGenreChange(evt.target.textContent);
          }}
        >{ALL_GENRES}</a>
      </li>
      {Array.from(genres).map((genre, i) => {
        return (
          <li key={`${genre}-${i}`} className={`catalog__genres-item ${filteredGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreChange(evt.target.textContent);
              }}
            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  filteredGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenresList;
