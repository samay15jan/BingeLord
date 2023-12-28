import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import discover from './routes/tmdbApis/discover.js'
import images from './routes/tmdbApis/images.js'
import movie from './routes/tmdbApis/movie.js'
import recommended from './routes/tmdbApis/recommended.js'
import search from './routes/tmdbApis/search.js'
import series from './routes/tmdbApis/series.js'
import trending from './routes/tmdbApis/trending.js'

dotenv.config();
connectDB()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
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
