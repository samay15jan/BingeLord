import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls";

const app = express()

// Getting Movie Credits 
app.get('/api/creditsMovie', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting TV Series Credits 
app.get('/api/creditsTV', async (req, res) => {
    try {
        const id = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app