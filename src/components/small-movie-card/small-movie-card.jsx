import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.timerId = null;

    this.onCardHover = this.onCardHover.bind(this);
    this.onCardLeave = this.onCardLeave.bind(this);
  }

  onCardHover() {
    this.timerId = setTimeout(() => this.setState({isPlaying: true}), 1000);
  }

  onCardLeave() {
    clearTimeout(this.timerId);
    return (
      this.setState({isPlaying: false})
    );
  }

  render() {
    const {film} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={this.onCardHover}
        onMouseLeave={this.onCardLeave}
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

export default SmallMovieCard;
