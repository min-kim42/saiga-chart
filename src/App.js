import React from "react";
import axios from "axios";
import Album from "./components/Track";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    tracks: [],
  };
  getTracks = async () => {
    // wait until the tracks data are fully loaded by axios
    const tracks_data = await axios.get(
      // use CORS proxy to get around "No Acess-Control-Allow-Origin header" error
      "https://fierce-ridge-86043.herokuapp.com/https://api.deezer.com/chart/0/tracks"
    );
    this.setState({ tracks: tracks_data.data.data, isLoading: false });
  };
  async componentDidMount() {
    this.getTracks();
  }
  render() {
    const { isLoading, tracks } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loading-message">
            <span className="loading-message__text">Loading...</span>
          </div>
        ) : (
          <div className="tracks">
            {tracks.map((track) => (
              <Album
                key={track.id}
                id={track.id}
                rank={track.position}
                artistName={track.artist.name}
                artistPhoto={track.artist.picture_small}
                trackTitle={track.title}
                albumTitle={track.album.title}
                albumCover={track.album.cover_medium}
                trackFile={track.preview}
                trackLink={track.link}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
