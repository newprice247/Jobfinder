const express = require("express");
const router = express.Router()
const listingsRouter = require('./listings.js')
const usersRouter = require('./users.js')

// All profile routes..
router.use('/listings', listingsRouter)
router.use('/users', usersRouter)

module.exports = router;