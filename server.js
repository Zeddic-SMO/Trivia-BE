const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const TriviaRoutes = require("./routes/trivia")

// MiddleWares
app.use(cors())
app.use(express.json())
app.use("/api", TriviaRoutes)

const PORT = process.env.PORT || 5000
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT} and DB COnnected`)
  })
})
