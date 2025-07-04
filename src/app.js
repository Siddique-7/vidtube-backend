import express from 'express'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
  })
)

// import routes
import router from './routes/healthcheck.routes.js'
import { healthcheck } from './controllers/healthcheck.controllers.js'


// routes
app.use("/api/v1/healthcheck", healthcheck)


// Comman middleware for app security
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

export { app }