import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../vidoe-player/video-player.jsx";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          this.setState({isPlaying: true});
        }}
        onMouseLeave={() => {
          this.setState({isPlaying: false});
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            poster={film.poster}
            preview={film.preview}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};
