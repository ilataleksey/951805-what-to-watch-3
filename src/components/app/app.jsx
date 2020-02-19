import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {films} = props;
  const titleClickHandler = () => {};
  return (
    <Main
      films={films}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
