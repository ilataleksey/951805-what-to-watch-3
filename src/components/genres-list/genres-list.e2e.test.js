import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list.jsx";
import {films, activeGenre, genresList} from "../../mocks/mocks-test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  target: {value: `genre-1`},
  preventDefault() {},
};

it(`Click on genre name calls onGenreChange callback`, () => {
  const onGenreChange = jest.fn();

  const genreListComponent = shallow(
      <GenresList
        films={films}
        activeGenre={activeGenre}
        genresList={genresList}
        onGenreChange={onGenreChange}
      />
  );

  const genres = genreListComponent.find(`a.catalog__genres-link`);
  const genreOne = genres.at(1);

  genreOne.simulate(`click`, mockEvent);

  expect(onGenreChange).toHaveBeenCalledTimes(1);
});
