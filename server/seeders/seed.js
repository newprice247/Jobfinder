require('dotenv').config();
const connection = require('../config/connection');
const Card = require('../models/Card');

const cards = [
    {
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        text: 'Text 1',
        link: 'Link 1',
        linkName: 'Link Name 1'
    },
    {
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        text: 'Text 2',
        link: 'Link 2',
        linkName: 'Link Name 2'
    },
    {
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        text: 'Text 3',
        link: 'Link 3',
        linkName: 'Link Name 3'
    },
];

// Connects to the database, deletes the users and thoughts collections if they exist already, creates the users and thoughts collections, and loops through each thought and pushes the thought's _id to the appropriate user's thoughts array field
connection.once('open', async () => {
    console.log('connected');

    // Deletes the users and thoughts collections if they exist already
    let currentCards = await Card.find({}).lean();
    if (currentCards.length > 0) {
        await Card.collection.drop();
    }
    

    // Creates the users and thoughts collections
    await Card.create(cards);

    // Displays the final table for the user collection
    let finalCards = await Card.find({}).lean();
    console.log(finalCards);
    
    // Exits the process
    process.exit(0);
});
