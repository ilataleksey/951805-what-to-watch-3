import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {films} from "../../mocks/mocks.test.js";

it(`Render SmallMoviesCard`, () => {
  const tree = renderer.create(<MoviesList
    films={films}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
