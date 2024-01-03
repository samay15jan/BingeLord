import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import discover from './routes/discover.js'
import images from './routes/images.js'
import movie from './routes/movie.js'
import recommended from './routes/recommended.js'
import search from './routes/search.js'
import series from './routes/series.js'
import trending from './routes/trending.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
    origin: ["https://bingelord.onrender.com", "https://bingelord.web.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.options('*', cors(corsOptions));
app.use('*', cors(corsOptions));

app.use('/', discover)
app.use('/', images)
app.use('/', movie)
app.use('/', recommended)
app.use('/', search)
app.use('/', series)
app.use('/', trending)

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})
