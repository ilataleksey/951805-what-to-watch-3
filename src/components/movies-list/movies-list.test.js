import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import films from "./movies-list.test.mocks.js";

it(`Render SmallMoviesCard`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
