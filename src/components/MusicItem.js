import React from "react";

const MusicItem = ({song, position}) => {
    return(
        <>
        <h3>#{position}: {song['im:name']['label']}</h3>
        <h5>Artist: {song['im:artist']['label']}</h5>
        </>
    )
};

export default MusicItem;