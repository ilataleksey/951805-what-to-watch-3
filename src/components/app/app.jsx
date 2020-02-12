import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {names} = props;
  return (
    <Main names={names}/>
  );
};

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
