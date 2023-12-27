import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Search for Movies from TMDB
app.get('/api/searchMovie', async (req, res) => {
    try {
        const search = req.query.search
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`;
        const params = {
            query: search,
            include_adult: 'false',
            language: 'en-US',
            page: '1',
        };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Search for TV shows from TMDB
app.get('/api/searchTV', async (req, res) => {
    try {
        const search = req.query.search
        const url = `https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1`;
        const params = {
            query: search,
            include_adult: 'false',
            language: 'en-US',
            page: '1'
        };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})


export default app