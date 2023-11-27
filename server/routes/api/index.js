const express = require("express");
const router = express.Router()
const cardRouter = require('./cards.js')

// All profile routes..
router.use('/cards', cardRouter)

module.exports = router;