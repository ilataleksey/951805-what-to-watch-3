import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";
import {film} from "../../mocks/mocks.test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should video play`, () => {
  const isPlaying = true;
  const {poster, preview} = film;

  const videoPlayer = shallow(
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        preview={preview}
      />
  );

  videoPlayer.instance().setRef();
  videoPlayer.instance().componentDidMount();
  expect(videoPlayer.state(`isPlaying`)).toBe(true);

});
