import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENER: `Drama`,
  YEAR: 2014,
};

ReactDOM.render(
    <App name={FILM.NAME} gener={FILM.GENER} year={FILM.YEAR}/>,
    document.querySelector(`#root`)
);
