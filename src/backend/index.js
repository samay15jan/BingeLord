import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import trending from './routes/tmdbApis/trending.js'
import discover from './routes/tmdbApis/discover.js'
import movie from './routes/tmdbApis/movie.js'
import images from './routes/tmdbApis/images.js'

dotenv.config();
connectDB()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/', trending)
app.use('/', discover)
app.use('/', movie)
app.use('/', images)

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})
