const { Listing } = require("../models/");

module.exports = {
  async getListing(req, res) {
    const listings = await Listing.find({})
    res.json(listings);
  },
  async getSingleListing(req, res) {
    try {
      const listing = await Listing.findOne({
        _id: req.params.listingId,
      })
      if (listing) {
        res.json(listing);
      } else {
        return res.json({ message: "Sorry no listing found with that ID" });
      }
    } catch (err) {
      res.json(err);
    }
  },
  async createListing({ body }, res) {
    const listing = await Listing.create(body);
    if (!listing) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    res.json(listing);
  },
  async deleteListing({ params }, res) {
    const listing = await Listing.findOneAndDelete({ _id: params.listingId });
    if (!listing) {
      return res
        .status(400)
        .json({ message: "Cannot find a listing with this id!" });
    }
    res.json(listing);
  },
  async updateListing({ params, body }, res) {
    const updatedListing = await Listing.findOneAndUpdate(
      { _id: params.listingId },
      { $set: body },
      { new: true, runValidators: true }
    );
    if (!updatedListing) {
      return res
        .status(400)
        .json({ message: "Couldn't find listing with this id!" });
    }
    return res.json(updatedListing);
  },
  async getListingByTitle({ params }, res) {
    const listing = await Listing.findOne({ title: params.title });
    if (!listing) {
      return res
        .status(400)
        .json({ message: "Cannot find a listing with this title!" });
    }
    res.json(listing);
  },
  async getListingByCategory({ params }, res) {
    const listing = await Listing.findOne({ category: params.category });
    if (!listing) {
      return res
        .status(400)
        .json({ message: "Cannot find a listing with this category!" });
    }
    res.json(listing);
  },
  async getListingByLocation({ params }, res) {
    const listing = await Listing.findOne({ location: params.location });
    if (!listing) {
      return res
        .status(400)
        .json({ message: "Cannot find a listing with this location!" });
    }
    res.json(listing);
  },
  async getListingBySalary({ params }, res) {
    const listing = await Listing.findOne({ salary: params.salary });
    if (!listing) {
      return res
        .status(400)
        .json({ message: "Cannot find a listing with this salary!" });
    }
    res.json(listing);
  },
};
