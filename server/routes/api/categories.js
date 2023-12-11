const express = require("express");
const router = express.Router();
const {
    getCategories,
    getListingsByCategory
} = require('../../controllers/categoryControllers');

// GET  /api/categories

router.route('/').get(getCategories);

router.route('/:name').get(getListingsByCategory);

module.exports = router;