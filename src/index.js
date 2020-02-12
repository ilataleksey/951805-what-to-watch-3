import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App names={names}/>,
    document.querySelector(`#root`)
);
