import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";
import {film} from "../../mocks/mocks.test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should small movie card be hovered`, () => {

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
      />
  );

  const card = smallMovieCard.find(`article.small-movie-card`);

  card.props().onMouseOver();
  setTimeout(() => expect(smallMovieCard.state(`isPlaying`)).toBe(true), 1000);

  card.props().onMouseLeave();
  expect(smallMovieCard.state(`isPlaying`)).toBe(false);
});
