import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator, genresList} from "../../reducer.js";
import Main from "../main/main.jsx";

const App = (props) => {
  const {films, activeGenre, onGenreChange} = props;

  return (
    <Main
      films={films}
      activeGenre={activeGenre}
      genresList={genresList}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.filterUpdate(genre));
    dispatch(ActionCreator.getFilteredFilms());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
