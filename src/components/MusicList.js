import React from "react";
import MusicItem from "./MusicItem";

const MusicList = ({music, title}) => {
    const songs = music.map((song, index) => {
        // song.
        return <MusicItem song={song} key={index} position={index + 1}/>
    });
  
    return (
      <div>
      <h1>{title}</h1>
        {songs}
    </div>
    );
};

export default MusicList;