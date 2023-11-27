require('dotenv').config();
const connection = require('../config/connection');
const Card = require('../models/Card');

const cards = [
    {
        title: 'Card 1',
        subtitle: "I'm being pulled from the cloud!",
        text: 'This is all being mapped over with a .map() function!',
        link: 'https://project3mernstack-c25ab63e2028.herokuapp.com/',
        linkName: 'Heroku Deployment'
    },
    {
        title: 'Card 2',
        subtitle: "I'm being pulled from the cloud too!",
        text: 'This is all being mapped over with a .map() function!',
        link: 'https://github.com/newprice247/Project3',
        linkName: 'GitHub Repository'
    },
    {
        title: 'Card 3',
        subtitle: "I'm being pulled from the cloud as well!",
        text: 'This is all being mapped over with a .map() function!',
        link: 'https://www.google.com/',
        linkName: 'Google'
    }
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
