import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Getting Recommended movie based on selected movie
app.get('/api/recommendedMovies', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting Recommended tv series based on selected series
app.get('/api/recommendedTV', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app
