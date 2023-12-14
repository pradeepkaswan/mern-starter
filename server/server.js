require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const { errorHandler } = require("./middlewares/error-handler")
const { logger } = require("./middlewares/logging")
const authRouter = require("./routes/auth-router")
const goalsRouter = require("./routes/goals-router")

const app = express()

// Connect to database
connectDB()

// Middleware
app.use(errorHandler)

// Enable CORS
app.use(cors())

// Serve static files from the React app
app.use(express.static("dist"))

// Parse incoming requests data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use("/api/goals", goalsRouter)
app.use("/api/auth", authRouter)

// Start server
const port = process.env.PORT || 3000

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})
