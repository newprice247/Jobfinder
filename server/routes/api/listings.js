const express = require("express");
const router = express.Router()

const Listing = require('../../models/Listing')

// GET  /api/profile
router.get("/", async (req, res) => {
    const listings = await Listing.find({})
    res.json(listings)

    console.log(listings)
})


//POST 
router.post("/", async (req, res) => {
    const newListing = await Listing.create(req.body);
    res.json(newListing)
})

module.exports = router;