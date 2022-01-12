import React, {useEffect, useState} from "react";
import MusicList from "../components/MusicList";

const MusicBox = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
      getMusic();
    }, [])

    const getMusic = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(music => setMusic(music))

    }

    return (
        <div className="main-container">
            <MusicList music = {music}/>
        </div>
    )
};

export default MusicBox;