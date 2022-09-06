import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";
import { searchResults } from "../data";

const TrackList = () => {
  return (
    <div className="TrackList">
      {searchResults.map((track) => {
        console.log(track);
        const { name, artist, album, id } = track;
        return <Track name={name} artist={artist} album={album} key={id} />;
      })}
    </div>
  );
};

export default TrackList;
