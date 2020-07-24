import React from "react";
import axios from "axios";
import Album from "./Album";

class App extends React.Component {
  state = {
    isLoading: true,
    albums: [],
  };
  // wait until the album data is fully loaded
  getAlbums = async () => {
    const albums = await axios.get(
      // use CORS proxy to get around "No Acess-Control-Allow-Origin header" error
      "https://fierce-ridge-86043.herokuapp.com/https://api.deezer.com/chart/0/albums"
    );
    this.setState({ albums: albums.data.data, isLoading: false });
  };
}

export default App;
