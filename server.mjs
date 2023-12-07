import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config()
const cors = require('cors');
const express = require('express')
import axios from 'axios';

const app = express()

const port = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/trending', async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'http://api.themoviedb.org/3/trending/movie/week',
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
            },
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);

    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api/trending`)
})