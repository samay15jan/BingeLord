import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/backend/config/db.js'

connectDB()
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

const apiRouteFiles = [
    'actors',
    'credits',
    'genre',
    'images',
    'recommended',
    'search',
    'series',
    'topRated',
    'trailer',
    'trending',
]

apiRouteFiles.forEach(async (routeFileName) => {
    const routeModule = await import(`./src/backend/routes/tmdbApis/${routeFileName}.js`);
    const routeFile = routeModule.default;
    app.use('/api', routeFile);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api/trending`)
})