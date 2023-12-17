import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Discover with filter
app.get('/api/discoverMovie', async (req, res) => {
    try {
        const genre = parseInt(req.query.genre, 10)
        const url = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
            language: 'en-US',
            page: '1',
            include_adult: true,
            include_video: false,
            sort_by: 'popularity.desc',
            year: '0',
            with_genres: `${genre}` || '0', 
        };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Discover with filter
app.get('/api/discoverTV', async (req, res) => {
    try {
        const genre = parseInt(req.query.genre, 10)
        const url = 'https://api.themoviedb.org/3/discover/tv';
        const params = {
            language: 'en-US',
            page: '1',
            include_adult: true,
            include_video: false,
            sort_by: 'popularity.desc',
            year: '0',
            with_genres: `${genre}` || '0', 
        };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app


/*
// Cheat Sheet:

Genres (Movies)                     Genres (TV Shows)
- Action: 28                        - Action & Adventure: 10759
- Adventure: 12                     - Animation: 16
- Animation: 16                     - Comedy: 35
- Comedy: 35                        - Crime: 80
- Crime: 80                         - Documentary: 99
- Documentary: 99                   - Drama: 18
- Drama: 18                         - Family: 10751
- Family: 10751                     - Kids: 10762
- Fantasy: 14                       - Mystery: 9648
- History: 36                       - News: 10763
- Horror: 27                        - Reality: 10764
- Music: 10402                      - Sci-Fi & Fantasy: 10765
- Mystery: 9648                     - Soap: 10766
- Romance: 10749                    - Talk: 10767
- Science Fiction: 878              - War & Politics: 10768
- TV Movie: 10770                   - Western: 37
- Thriller: 53
- War: 10752
- Western: 37
*/