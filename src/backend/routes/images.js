import express from "express";
import makeAPICall from "../utils/tmdbApiCalls.js";

const app = express()

// Getting Specific Images of Movies from TMDB
app.get('/api/imagesMovie', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/movie/${id}/images`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting Specific Images of TV Series from TMDB
app.get('/api/imagesTV', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/tv/${id}/images`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app
