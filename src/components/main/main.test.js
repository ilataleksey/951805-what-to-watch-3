import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "./main.test.mocks.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      films={films}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
