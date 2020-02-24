import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {poster, preview} = this.props;

    return (
      <video
        width="280"
        height="175"
        poster={poster}
        muted={true}
        src={preview}
      />
    );
  }
}

VideoPlayer.propTypes = {
  // isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
