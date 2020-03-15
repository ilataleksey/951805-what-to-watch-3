import React from "react";
import PropTypes from "prop-types";
import {ALL_GENRES} from "../../const.js";

const GenresList = (props) => {
  const {filteredGenre, genresList, onGenreChange} = props;

  const onGenreClick = (evt) => {
    evt.preventDefault();
    onGenreChange(evt.target.textContent);
  };

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${filteredGenre === ALL_GENRES ? `catalog__genres-item--active` : ``}`}>
        <a href="#"
          className="catalog__genres-link"
          onClick={onGenreClick}
        >{ALL_GENRES}</a>
      </li>
      {Array.from(genresList).map((genre, i) => {
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
  genresList: PropTypes.objectOf(PropTypes.string),
  onGenreChange: PropTypes.func.isRequired,
};

export default GenresList;
