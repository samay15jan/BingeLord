import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls";

const app = express()

// Getting Trending Movies from TMDB
app.get('/api/movie_trending', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/trending/movie/week';
        const params = { language: 'en-US' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting Trending TV Shows from TMDB
app.get('/api/tv_trending', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/trending/tv/week';
        const params = { language: 'en-US' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app