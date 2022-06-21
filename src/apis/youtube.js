import axios from 'axios';

const KEY = 'AIzaSyAbxL9KLo47awDP1TQAL5sEkb-D-Ff561c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});