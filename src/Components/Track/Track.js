import React from "react";
import "./Track.css";

const Track = ({ name, album, artist }) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      {/* <button className="Track-action"><!-- + or - will go here --></button> */}
    </div>
  );
};

export default Track;
