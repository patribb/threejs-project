import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/dalle', dalleRoutes)

app.listen(process.env.PORT, () => console.log(`🚀 Server is running on port ${process.env.PORT}`))