import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {films, filteredGenre} from "../../mocks/mocks-test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        films={films}
        filteredGenre={filteredGenre}
        onGenreChange={() => {}}
        onTitleClick={onTitleClick}
      />
  );

  const title = main.find(`h2.movie-card__title`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
