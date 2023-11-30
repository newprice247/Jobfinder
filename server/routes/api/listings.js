const express = require("express");
const router = express.Router()
const {
    getListing,
    getSingleListing,
    createListing,
    deleteListing,
    updateListing

} = require('../../controllers/listingControllers');

// GET  /api/profile
router.route('/').get(getListing).post(createListing);

router.route('/:listingId').get(getSingleListing).delete(deleteListing).put(updateListing);

module.exports = router;