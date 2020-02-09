import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, gener, year} = props;
  return (
    <Main name={name} gener={gener} year={year}/>
  );
};

export default App;
