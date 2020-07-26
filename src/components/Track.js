import React from "react";
import propTypes from "prop-types";
import "./Track.css";

function Track({
  rank,
  trackTitle,
  artistName,
  artistPhoto,
  albumCover,
  trackFile,
  trackLink,
}) {
  return (
    <div className="track">
      <div className="track__column">
        <div className="track__rank">
          <h1 className="track__rank-text">{rank}</h1>
        </div>
      </div>
      <div className="track__column">
        <div className="track__cover">
          <img src={albumCover} alt={trackTitle} title={trackTitle} />
        </div>
      </div>
      <div className="track__column">
        <div className="track__info">
          <h4 className="track__title">{trackTitle.slice(0, 21)}</h4>
          <div className="track__artistInfo">
            <img
              className="track__artistPhoto"
              src={artistPhoto}
              alt={artistName}
              title={artistName}
            ></img>
            <h5 className="track__artistName">{artistName.slice(0, 21)}</h5>
          </div>
          <div className="track__deezerLink">
            <a
              href={trackLink}
              className="track__deezerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Listen to the full song on Deezer</span>
              <img
                src={require("../img/deezer_logo.png")}
                alt={"deezer"}
                title={"deezer"}
              />
            </a>
          </div>
          <div className="track__audioContainer">
            <audio controls className="track__audioFile">
              <source src={trackFile} type="audio/mp3"></source>
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

Track.propTypes = {
  albumCover: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  rank: propTypes.number.isRequired,
  trackTitle: propTypes.string.isRequired,
  artistName: propTypes.string.isRequired,
  artistPhoto: propTypes.string.isRequired,
  trackFile: propTypes.string.isRequired,
  trackLink: propTypes.string.isRequired,
};

export default Track;
