import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import {films, genresList} from "../../mocks/mocks-test.js";
import {filteredGenre} from "../../mocks/mocks-test.js";

it(`Render GenresList`, () => {
  const tree = renderer.create(<GenresList
    films={films}
    genresList={genresList}
    filteredGenre={filteredGenre}
    onGenreChange={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
