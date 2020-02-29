import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import film from "./small-movie-card.test.mocks.js";

it(`Render SmallMoviesCard`, () => {
  const tree = renderer.create(<SmallMovieCard
    film={film}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
