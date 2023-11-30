const { Listing } = require('../models/');

module.exports = {
    async getListing(req, res) {
        const listings = await Listing.find({})
        res.json(listings);
    },
    async getSingleListing(req, res) {
        try {
            const listing = await Listing.findOne({ _id: req.params.listingId }).populate('contact')
            if (listing) {
                res.json(listing)
            } else {
                return res.json({ message: 'Sorry no listing found with that ID' })
            }
        }
        catch (err) {
            res.json(err)
        }
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