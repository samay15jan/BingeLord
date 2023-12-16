import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls";

const app = express()

// Getting genre of Movie
app.get('/api/genreMovie', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
        const params = { language: 'en-US', page: '1' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting genre of tv series
app.get('/api/genreTV', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
        const params = { language: 'en-US', page: '1' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

export default app