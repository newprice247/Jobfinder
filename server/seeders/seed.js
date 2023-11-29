require('dotenv').config();
const connection = require('../config/connection');
const User = require('../models/User');
const Listing = require('../models/Listing');

const users = [
    {
        name: 'John Smith',
        email: 'john@email.com',
        password: 'password',
        phone: '555-555-5555',
        listings: [],
        savedListings: [],
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: 'password',
        phone: '555-555-5555',
        listings: [],
        savedListings: [],
    },
]

const listings = [
    {
        title: 'Full Stack Developer',
        description: 'Full Stack Developer needed for a full-time position. Must have at least 2 years of experience.',
        requirements: 'Must have at least 2 years of experience.',
        location: 'Remote',
        benefits: 'Health, Dental, Vision, 401k',
        salary: 100000,
        company: 'ABC Company',
        contact: '',
        website: 'https://www.abc.com',
    },
    {
        title: 'Front End Developer',
        description: 'Front End Developer needed for a full-time position. Must have at least 2 years of experience.',
        requirements: 'Must have at least 2 years of experience.',
        location: 'Remote',
        benefits: 'Health, Dental, Vision, 401k',
        salary: 100000,
        company: 'ABC Company',
        contact: '',
        website: 'https://www.abc.com',
    },
    {
        title: 'Back End Developer',
        description: 'Back End Developer needed for a full-time position. Must have at least 2 years of experience.',
        requirements: 'Must have at least 2 years of experience.',
        location: 'Remote',
        benefits: 'Health, Dental, Vision, 401k',
        salary: 100000,
        company: 'ABC Company',
        contact: '',
        website: 'https://www.abc.com',
    },
    {
        title: 'Full Stack Developer',
        description: 'Full Stack Developer needed for a full-time position. Must have at least 2 years of experience.',
        requirements: 'Must have at least 2 years of experience.',
        location: 'Remote',
        benefits: 'Health, Dental, Vision, 401k',
        salary: 100000,
        company: 'ABC Company',
        contact: '',
        website: 'https://www.abc.com',
    },
]

connection.once('open', async () => {
    console.log('connected');

    let currentUsers = await User.find({}).lean();
    if (currentUsers.length > 0) {
        await User.collection.drop();
    }
    let currentListings = await Listing.find({}).lean();
    if (currentListings.length > 0) {
        await Listing.collection.drop();
    }

    await User.create(users);
    
    let listingContacts = await User.find({}).lean();
    for (let i = 0; i < listings.length; i++) {

        listings[i].contact = listingContacts[Math.floor(Math.random() * listingContacts.length)]._id;

    }


    await Listing.create(listings);

    let updatedUsers = await User.find({}).lean();
    for (let i = 0; i < updatedUsers.length; i++) {
        let user = updatedUsers[i];
        let userListing = await Listing.find({ contact: user._id }).lean();
        user.listings = userListing.map(listing => listing._id);
        await User.findByIdAndUpdate(user._id, user);
    }



    let finalUsers = await User.find({}).lean();
    let finalListings = await Listing.find({}).lean();
    console.log(finalUsers);
    console.log(finalListings);
    console.log('seeded successfully');

    // Exits the process
    process.exit(0);
});