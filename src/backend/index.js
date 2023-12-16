import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const axios = require('axios');
const cors = require('cors');
import authRoutes from './routes/auth.routes.js'

require('dotenv').config();

import connectDB from './config/db.js';

connectDB()

const app = express()
const port = process.env.PORT || 3000


app.use(cors());
app.use("/api/v1", authRoutes)

// Function for TMDB API calls
const makeAPICall = async (url, params = {}) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Getting Trending Movies from TMDB
app.get('/api/movie_trending', async (req, res) => {
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
app.get('/api/tv_trending', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/trending/tv/week';
        const params = { language: 'en-US' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})


// Getting Specific Images of Movies from TMDB
app.get('/api/movie_images', async (req, res) => {
    try {
        const ID = parseInt(req.query.id, 10)
        const url = `https://api.themoviedb.org/3/movie/${ID}/images`;
        const params = null;
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// Getting Upcoming Movies from TMDB
app.get('/api/upcoming', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/upcoming';
        const params = { language: 'en-US', page: '1' };
        const data = await makeAPICall(url, params);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

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

// Search for anything from TMDB (movies, TV shows and people)
app.get('/api/search', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/search/multi';
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

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api/trending`)
})