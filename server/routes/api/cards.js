const express = require("express");
const router = express.Router()

const Card = require('../../models/Card')

// GET  /api/profile
router.get("/", async (req, res) => {
    const cards = await Card.find({})
    console.log(cards)
    res.json(cards)

})


//POST 
router.post("/", async (req, res) => {
    const newCard = await Card.create(req.body);
    res.json(newCard)
})

module.exports = router;