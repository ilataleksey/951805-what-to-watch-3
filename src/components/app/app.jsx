import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {names} = props;
  const titleClickHandler = () => {};
  return (
    <Main
      names={names}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
