import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {films} from "../../mocks/mocks-test.js";
import {filteredGenre} from "../../mocks/mocks-test.js";

it(`Render Main`, () => {
  const tree = renderer.create(<Main
    films={films}
    filteredGenre={filteredGenre}
    onGenreChange={() => {}}
    onTitleClick={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
