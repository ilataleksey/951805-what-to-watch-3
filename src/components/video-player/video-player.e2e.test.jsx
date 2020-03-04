import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";
import {film} from "../../mocks/mocks-test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should video play`, () => {
  const isPlaying = true;
  const {poster, preview} = film;

  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        preview={preview}
      />
  );

  expect(videoPlayer.state(`isPlaying`)).toBe(true);
});

it(`Should video pause`, () => {
  const isPlaying = false;
  const {poster, preview} = film;

  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        preview={preview}
      />
  );

  expect(videoPlayer.state(`isPlaying`)).toBe(false);
});
