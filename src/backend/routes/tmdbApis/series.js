import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Getting tv series details 
app.get('/api/series', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US&append_to_response=videos,credits,similar`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting season details
app.get('/api/season', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const season = parseInt(req.query.season, 10)
        const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}?language=en-US`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app