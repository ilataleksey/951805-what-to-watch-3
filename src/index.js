import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM = {
  genre: `Drama`,
  name: `The Grand Budapest Hotel`,
  year: 2014,
};

ReactDOM.render(
    <App genre={FILM.genre} name={FILM.name} year={FILM.year}/>,
    document.querySelector(`#root`)
);
