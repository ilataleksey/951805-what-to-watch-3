import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {film} from "../../mocks/mocks-test.js";

it(`Render VideoPlayer`, () => {
  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    poster={film.poster}
    preview={film.preview}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
