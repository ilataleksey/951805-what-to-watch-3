import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {poster, preview} = this.props;
    const video = this._videoRef.current;

    video.poster = poster;
    video.src = preview;
    video.width = `280`;
    video.height = `175`;
    video.muted = true;

    video.ontimeupdate = () => this.setState({
      progress: 0,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.ontimeupdate = null;
    video.poster = ``;
    video.src = ``;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.src = this.props.preview;
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default VideoPlayer;
