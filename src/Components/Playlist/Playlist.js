import React from "react";
import { playlistTracks } from "../data";
import Track from "../Track/Track";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

const Playlist = () => {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input value="New Playlist" />
      {/* <TrackList tracks={playlistTracks} /> */}
      {playlistTracks.map((track) => {
        console.log(track);
        const { name, artist, album, id } = track;
        return <Track name={name} artist={artist} album={album} key={id} />;
      })}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
