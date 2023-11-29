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
        name: 'Alice Johnson',
        email: 'alice@email.com',
        password: 'securepass',
        phone: '555-123-4567',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Robert Davis',
        email: 'robert@email.com',
        password: 'pass123',
        phone: '555-789-0123',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Emily White',
        email: 'emily@email.com',
        password: 'mypassword',
        phone: '555-456-7890',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Daniel Brown',
        email: 'daniel@email.com',
        password: 'danny123',
        phone: '555-987-6543',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Elena Martinez',
        email: 'elena@email.com',
        password: 'elena123',
        phone: '555-111-2222',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Samuel Turner',
        email: 'sam@email.com',
        password: 'sammy456',
        phone: '555-333-4444',
        listings: [],
        savedListings: [],
      },
      {
        name: 'Megan Williams',
        email: 'megan@email.com',
        password: 'meganpass',
        phone: '555-555-6666',
        listings: [],
        savedListings: [],
      },
      {
        name: 'David Miller',
        email: 'david@email.com',
        password: 'davidpass123',
        phone: '555-777-8888',
        listings: [],
        savedListings: [],
      },
]

const listings = [
    {
        title: 'Full Stack Developer',
        description: 'Full Stack Developer needed for a full-time position. Must have at least 2 years of experience.',
        requirements: 'Bachelor\'s degree in Computer Science and proficiency in JavaScript.',
        location: 'Remote',
        benefits: 'Health, Dental, Vision, 401k',
        salary: '$100,000 - $120,000 yearly',
        company: 'ABC Company',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Construction Project Manager',
        description: 'Experienced Construction Project Manager needed for large-scale projects.',
        requirements: 'Minimum 5 years of project management experience in the construction industry.',
        location: 'Various Locations',
        benefits: 'Competitive salary and comprehensive benefits package.',
        salary: '$90,000 - $110,000 yearly',
        company: 'XYZ Construction',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Retail Sales Associate',
        description: 'Join our dynamic retail team! Seeking motivated individuals with excellent customer service skills.',
        requirements: 'Previous retail experience preferred but not required.',
        location: 'City Center Mall',
        benefits: 'Employee discounts and opportunities for career growth.',
        salary: '$30,000 - $40,000 yearly',
        company: 'Retail Hub',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Data Scientist',
        description: 'Exciting opportunity for a Data Scientist to join our innovative team. Analyze large datasets and develop predictive models.',
        requirements: 'Master\'s degree in Statistics, Computer Science, or related field. Proficiency in Python and experience with machine learning frameworks.',
        location: 'Headquarters, Data Science Division',
        benefits: 'Health insurance, stock options, and professional development opportunities.',
        salary: '$120,000 - $140,000 yearly',
        company: 'DataTech Innovations',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Marketing Coordinator',
        description: 'Join our marketing team and contribute to the success of our brand. Coordinate marketing campaigns, events, and social media efforts.',
        requirements: 'Bachelor\'s degree in Marketing or related field. Strong communication and organizational skills.',
        location: 'Marketing Department, Downtown Office',
        benefits: 'Competitive salary, health benefits, and a creative work environment.',
        salary: '$50,000 - $60,000 yearly',
        company: 'BrandBuilders Inc.',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Registered Nurse',
        description: 'We are hiring compassionate Registered Nurses to provide high-quality patient care. Multiple positions available in various specialties.',
        requirements: 'Valid nursing license, BSN preferred. Minimum 2 years of clinical experience.',
        location: 'City General Hospital',
        benefits: 'Medical, dental, and vision insurance, retirement plans, and continuing education opportunities.',
        salary: '$70,000 - $90,000 yearly',
        company: 'City General Healthcare',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Graphic Designer',
        description: 'Creative Graphic Designer wanted to join our design team. Develop visually appealing graphics for various projects.',
        requirements: 'Bachelor\'s degree in Graphic Design or related field. Proficiency in Adobe Creative Suite.',
        location: 'Design Studio, Creative Department',
        benefits: 'Competitive salary, flexible work hours, and opportunities for professional growth.',
        salary: '$55,000 - $70,000 yearly',
        company: 'DesignCraft Studios',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Customer Support Specialist',
        description: 'Join our customer support team to assist customers with inquiries, resolve issues, and provide exceptional service.',
        requirements: 'Excellent communication skills and previous customer service experience. Ability to work in a fast-paced environment.',
        location: 'Customer Support Center, Remote Options Available',
        benefits: 'Health and wellness programs, competitive salary, and career advancement opportunities.',
        salary: '$40,000 - $50,000 yearly',
        company: 'ServicePro Solutions',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
      },
      {
        title: 'Electrical Engineer',
        description: 'Experienced Electrical Engineer needed to design and implement electrical systems. Work on cutting-edge projects in a dynamic environment.',
        requirements: 'Bachelor\'s degree in Electrical Engineering and 3+ years of relevant experience. Proficiency in CAD software.',
        location: 'Engineering Department, Tech Innovations Center',
        benefits: 'Health insurance, retirement plans, and ongoing training programs.',
        salary: '$80,000 - $100,000 yearly',
        company: 'Tech Innovations Inc.',
        contact: '',
        website: 'https://github.com/newprice247/Jobfinder',
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