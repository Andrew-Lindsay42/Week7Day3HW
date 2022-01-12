import React, {useEffect, useState} from "react";
import MusicList from "../components/MusicList";

const MusicBox = () => {
    const [music, setMusic] = useState([]);
    const [title, setTitle] = useState("");
    let result = null;

    useEffect(() => {
      getMusic();
    }, [])

    const getMusic = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(res => result = res)
        .then( () => setTitle(result['feed']['title']['label']))
        .then( () => setMusic(result['feed']['entry']))

    }

    return (
        <div className="main-container">
            <MusicList music = {music} title = {title}/>
        </div>
    )
};

export default MusicBox;