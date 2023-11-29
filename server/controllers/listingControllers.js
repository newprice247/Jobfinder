const { Listing } = require('../models/');

module.exports = {
    async getListing(req, res) {
        const listings = await Listing.find({});
        res.json(listings);
    },
    async getSingleListing({ user = null, params }, res) {
        const foundListing = await Listing.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }]
        });
        if (!foundListing) {
            return res.status(400).json({ message: 'Cannot find a listing with this id!' });
        }
        res.json(foundListing);
    },
    async createListing({ body }, res) {
        const listing = await Listing.create(body);
        if (!listing) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json(listing);
    },
    async deleteListing({ params }, res) {
        const listing = await Listing.findOneAndDelete({ _id: params.id });
        if (!listing) {
            return res.status(400).json({ message: 'Cannot find a listing with this id!' });
        }
        res.json(listing);
    },
    async updateListing({ params }, res) {
        const listing = await Listing.findOneAndUpdate({ _id: params.id });
        if (!listing) {
            return res.status(400).json({ message: 'Cannot find a listing with this id!' });
        }
        res.json(listing);
    }
};