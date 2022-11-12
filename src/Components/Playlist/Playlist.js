import React from "react";
import { playlistTracks } from "../data";
import Track from "../Track/Track";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} />

        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
