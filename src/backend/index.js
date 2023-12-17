import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import trending from './routes/tmdbApis/trending.js'
import discover from './routes/tmdbApis/discover.js'

dotenv.config();
connectDB()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/', trending)
app.use('/', discover)

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})