import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "./main.test.mocks.js";

it(`Render Main`, () => {
  const tree = renderer.create(<Main
    films={films}
    onTitleClick={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
