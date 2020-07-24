import React from "react";
import axios from "axios";
import Album from "./Album";

class App extends React.Component {
  state = {
    isLoading: true,
    albums: [],
  };
  getAlbums = async () => {
    // wait until the album data is fully loaded by axios
    const albums = await axios.get(
      // use CORS proxy to get around "No Acess-Control-Allow-Origin header" error
      "https://fierce-ridge-86043.herokuapp.com/https://api.deezer.com/chart/0/albums"
    );
    this.setState({ albums: albums.data.data, isLoading: false });
  };
  async componentDidMount() {
    this.getAlbums();
  }
  render() {
    const { isLoading, albums } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : albums.map((album) => (
              <Album
                key={album.id}
                id={album.id}
                position={album.position}
                artist={album.artist.name}
                title={album.title}
                cover={album.cover_medium}
              />
            ))}
      </div>
    );
  }
}

export default App;
