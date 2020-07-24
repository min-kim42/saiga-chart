import React from "react";
import propTypes from "prop-types";
import "./Album.css";

function Album({ rank, title, artist, cover }) {
  return (
    <div class="album">
      <img src={cover} alt={title} title={title} />
      <div class="album__info">
        <h3 class="album__rank">{rank}</h3>
        <h4 class="album__title">{title}</h4>
        <h5 class="album__artist">{artist}</h5>
      </div>
    </div>
  );
}

Album.propTypes = {
  id: propTypes.number.isRequired,
  rank: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
};

export default Album;
