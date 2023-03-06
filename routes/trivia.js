const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Response = require("../models/TriviaModel")

// Get all scores
router.get("/responses", async (req, res) => {
  const responses = await Response.find()
  res.status(200).json(responses)
})

// Submit scores
router.post("/submit", async (req, res) => {
  try {
    const { firstName } = req.body
    if (!firstName)
      return res.status(501).json({ error: "First Name is Required!" })

    const response = await Response.create(req.body)

    const saveResponse = await response.save()

    if (!saveResponse) return res.status(501).json({ error: "Try again!" })

    res.status(200).json(saveResponse)
  } catch (error) {
    res.status(501).json(error.message)
  }
})

module.exports = router
