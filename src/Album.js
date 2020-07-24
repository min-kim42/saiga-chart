import React from "react";
import propTypes from "prop-types";

function Album({ id, position, artist, title, cover }) {
  return <h4>{title}</h4>;
}

Album.propTypes = {
  id: propTypes.number.isRequired,
  position: propTypes.number.isRequired,
  artist: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
};

export default Album;
