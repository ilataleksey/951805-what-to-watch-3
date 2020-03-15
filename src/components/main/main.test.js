import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {films, activeGenre, genresList} from "../../mocks/mocks-test.js";

it(`Render Main`, () => {
  const tree = renderer.create(<Main
    films={films}
    activeGenre={activeGenre}
    genresList={genresList}
    onGenreChange={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
