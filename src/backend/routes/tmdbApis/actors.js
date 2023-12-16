import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls";

const app = express()

// Getting Popular Actors from TMDB
app.get('/api/actors', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/person/popular';
        const params = { language: 'en-US', page: '1' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app