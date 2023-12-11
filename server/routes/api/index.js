const express = require("express");
const router = express.Router()
const categoryRouter = require('./categories.js')
const listingsRouter = require('./listings.js')
const usersRouter = require('./users.js')


// All profile routes..
router.use('/categories', categoryRouter)
router.use('/listings', listingsRouter)
router.use('/users', usersRouter)

module.exports = router;