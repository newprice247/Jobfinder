const express = require("express");
const router = express.Router()
const {
    getListing,
    getSingleListing,
    createListing,
    deleteListing,
    updateListing,
    getListingByTitle

} = require('../../controllers/listingControllers');

// GET  /api/profile
router.route('/').get(getListing).post(createListing);

router.route('/:listingId').get(getSingleListing).delete(deleteListing).put(updateListing);

router.route('/title/:title').get(getListingByTitle);

module.exports = router;