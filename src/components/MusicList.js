import React from "react";
import MusicItem from "./MusicItem";

const MusicList = ({music}) => {
    const title = music['feed']['title']['label'];
    const songs = (music['feed']['entry']).map((song, index) => {
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