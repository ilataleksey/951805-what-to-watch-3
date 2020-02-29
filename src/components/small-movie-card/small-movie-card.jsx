import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.onCardHover = this.onCardHover.bind(this);
  }

  onCardHover() {
    this.setState({isPlaying: true});
  }

  onCardLeave() {
    this.setState({isPlaying: false});
  }

  render() {
    const {film} = this.props;

    let timerId = null;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          timerId = setTimeout(() => this.onCardHover(), 1000);
        }}
        onMouseLeave={() => {
          clearTimeout(timerId);
          this.onCardLeave();
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

export default SmallMovieCard;
