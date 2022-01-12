import React, {useEffect, useState} from 'react';
import MusicList from '../components/MusicList';

const MusicBox = () => {
    const [music, setMusic] = useState([]);
    const [title, setTitle] = useState('Pick a genre to see the top songs');
    
    const url_prefix = 'https://itunes.apple.com/gb/rss/topsongs/limit=20';
    let url_suffix = '/json';

    const getMusic = function(){
        let result = null;

        fetch(url_prefix + url_suffix)
        .then(res => res.json())
        .then(res => result = res)
        .then( () => setTitle(result['feed']['title']['label']))
        .then( () => setMusic(result['feed']['entry']));
    }

    const handleChange = function(event) {

        if (event.target.value !== '') {
            url_suffix = event.target.value;
            getMusic();
        } else {
            setMusic([]);
            setTitle('Pick a genre to see the top songs');
        };

    }

    return (
        <div className='main-container'>
            <select onChange={handleChange}>
                <option value=''>Choose a genre</option>
                <option value='/json'>All</option>
                <option value='/genre=4/json'>Children's Music</option>
                <option value='/genre=14/json'>Pop</option>
                <option value='/genre=21/json'>Rock</option>
                <option value='/genre=17/json'>Dance</option>
                <option value='/genre=6/json'>Country</option>

            </select>
            <MusicList music = {music} title = {title}/>
        </div>
    )
};

export default MusicBox;