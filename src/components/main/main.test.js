import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {films, filteredGenre, genresList} from "../../mocks/mocks-test.js";

it(`Render Main`, () => {
  const tree = renderer.create(<Main
    films={films}
    filteredGenre={filteredGenre}
    genresList={genresList}
    onGenreChange={() => {}}
    onTitleClick={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
