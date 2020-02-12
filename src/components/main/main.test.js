import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main.jsx";

const names = [`film1, film2, film3`];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      names={names}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
