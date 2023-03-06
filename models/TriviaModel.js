const mongoose = require("mongoose")

const TriviaSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    scores: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const Response = mongoose.model("Response", TriviaSchema)

module.exports = Response
