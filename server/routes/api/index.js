const express = require("express");
const router = express.Router()
const listingsRouter = require('./listings.js')

// All profile routes..
router.use('/listings', listingsRouter)

module.exports = router;