import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const names = [`film1, film2, film3`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      names={names}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
