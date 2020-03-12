import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";

class App extends PureComponent {
  render() {
    const {
      films,
      filteredGenre,
      onGenreChange,
    } = this.props;

    return (
      <Main
        films={films}
        filteredGenre={filteredGenre}
        onGenreChange={onGenreChange}
      />
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  filteredGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  filteredGenre: state.filteredGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.filterUpdate(genre));
    dispatch(ActionCreator.getFilteredFilms());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
