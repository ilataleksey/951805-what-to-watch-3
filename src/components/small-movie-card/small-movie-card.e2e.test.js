import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";
import film from "./small-movie-card.test.mocks.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should small movie card be hovered`, () => {
  const onCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onCardHover={onCardHover}
      />
  );

  const card = smallMovieCard.find(`article.small-movie-card`);

  card.props().onMouseOver();

  expect(onCardHover.mock.calls.length).toBe(1);
});
