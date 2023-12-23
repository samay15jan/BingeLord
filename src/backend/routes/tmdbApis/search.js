import express from "express";
import makeAPICall from "../../utils/tmdbApiCalls.js";

const app = express()

// Search for anything from TMDB (movies, TV shows and people)
app.get('/api/search', async (req, res) => {
    try {
        const query = parseInt(req.query.search, 10)
        const url = `https://api.themoviedb.org/3/search/multi?query=${query}include_adult=false&language=en-US&page=1`;
        const params = {
            query: '##GETDATA##', // for Spaces add %20
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