import express from "express";
import makeAPICall from "../utils/tmdbApiCalls.js";

const app = express()

// Getting Trending Movies from TMDB
app.get('/api/trendingMovie', async (req, res) => {
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
app.get('/api/trendingTV', async (req, res) => {
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
