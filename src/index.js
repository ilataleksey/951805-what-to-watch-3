import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App names={NAMES}/>,
    document.querySelector(`#root`)
);
