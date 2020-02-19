import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import films from "./app.test.mocks.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
