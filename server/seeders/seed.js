require("dotenv").config();
const connection = require("../config/connection");
const User = require("../models/User");
const Listing = require("../models/Listing");
const Category = require("../models/Category");
const bcrypt = require("bcrypt");
const listings = require("./listings.js");
const categories = require("./categories.js");
const users = require("./users.js");





connection.once("open", async () => {
  console.log("connected");

  let currentUsers = await User.find({}).lean();
  if (currentUsers.length > 0) {
    await User.collection.drop();
  }
  let currentCategories = await Category.find({}).lean();
  if (currentCategories.length > 0) {
    await Category.collection.drop();
  }
  let currentListings = await Listing.find({}).lean();
  if (currentListings.length > 0) {
    await Listing.collection.drop();
  }

  await User.create(users);

  let listingContacts = await User.find({}).lean();
  for (let i = 0; i < listings.length; i++) {
    listings[i].contact =
      listingContacts[Math.floor(Math.random() * listingContacts.length)]._id;
  }

  await Category.create(categories);

  let listingCategories = await Category.find({}).lean();
  for (let i = 0; i < listings.length; i++) {
    for (let j = 0; j < listingCategories.length; j++) {
      if (listings[i].category === listingCategories[j].name) {
        listings[i].category = listingCategories[j]._id;
      }
    }
  }

  await Listing.create(listings);

  let updatedUsers = await User.find({}).lean();
  for (let i = 0; i < updatedUsers.length; i++) {
    let user = updatedUsers[i];
    let userListing = await Listing.find({ contact: user._id }).lean();
    user.listings = userListing.map((listing) => listing._id);
    await User.findByIdAndUpdate(user._id, user);
  }

  let finalUsers = await User.find({}).lean();
  let finalListings = await Listing.find({}).lean();
  console.log(finalUsers);
  console.log(finalListings);
  console.log("seeded successfully");

  // Exits the process
  process.exit(0);
});
