import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {genre, name, year} = props;
  return (
    <Main genre={genre} name={name} year={year}/>
  );
};

export default App;
