import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Getting Top Rated Movies In US
app.get('/api/topRatedMovie', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=US';
        const params = { language: 'en-US' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting Top Rated TV Shows In US
app.get('/api/topRatedTV', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&region=US';
        const params = { language: 'en-US' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app