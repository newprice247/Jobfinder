import React, { useState, useEffect } from "react";

// imports the search function from the API.js file, used to fetch the listings and user models from the database
import search from "../../utils/API";

// imports the motion library for animations
import { motion } from "framer-motion"

// imports the current listing and job listing prototypes from the components folder
import CurrentListing from "../components/CurrentListing";
import JobListing from "../components/JobListingCard";
import CreateListingModal from "../components/CreateListingModal";
import Auth from "../../utils/auth";
import Searchbar from  "../components/Searchbar";

// Exporting the Homepage, located at '/'
export default function Homepage() {

    // Using useState to set the listings and listingContact to an empty array, is used by the map function to display the listings and pull the contact information for each listing from the user models in the database
    const [listings, setListings] = useState([]);
    useEffect(() => {
        search.fetchListings()
            .then((data) => setListings(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const [listingContact, setListingContact] = useState([]);
    useEffect(() => {
        search.fetchUsers()
            .then((data) => setListingContact(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    // Using useState to set the currentListing to null, is used to display the current listing when a user clicks on a listing
    const [currentListing, setCurrentListing] = useState(null);
    // if the currentListing is not null and is not an object, fetch the listing by id and set the currentListing to the data
    useEffect(() => {
        if (currentListing !== null && typeof currentListing !== "object") {
            search.fetchListingById(currentListing)
                .then((data) => setCurrentListing(data))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [currentListing]);


    // Returning the homepage as html
    return (
        <div className="bg-myColor-3">
            <Searchbar />

            {/* Using 'motion' to animate the homepage, set as a div container with opening and closing motion.div tags */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap mt-20 justify-center items-center">
                
                    
                {Auth.loggedIn() ? (
                    
                    <CreateListingModal />
                ) : (
                    <div>
                        <h1 className="overflow-y-auto h-[80vh]">Log in to create a listing!</h1>
                    </div>
                )}
                {/* container for the job listings, current listing, and search bar */}
                <div
                    className="sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ml-10 justify-center items-center mb-10 overflow-y-auto  h-[95vh] no-scrollbar"
                >
                    {/* Maps through the listings array and displays each listing as a card, passing in the listing information as props to the JobListing prototype */}
                    {listings.map((listing) => (
                        <JobListing
                            id={listing._id}
                            title={listing.title}
                            location={listing.location}
                            description={listing.description}
                            requirements={listing.requirements}
                            salary={listing.salary}
                            benefits={listing.benefits}
                            company={listing.company}

                            // Maps through the listingContact array and displays the contact information for each listing as props to the JobListing prototype
                            email={
                                listingContact.map((contact) => {
                                    if (listing.contact === contact._id) {
                                        return contact.email;
                                    }
                                    return null;
                                })
                            }
                            phone={
                                listingContact.map((contact) => {
                                    if (listing.contact === contact._id) {
                                        return contact.phone;
                                    }
                                    return null;
                                })
                            }
                            website={listing.website}
                            // Sets the current listing to the listing id when a user clicks on a listing
                            onClick={() => {
                                setCurrentListing(listing._id);
                            }}
                        />
                    ))}
                </div>

                {/* container for the current listing, displays the current listing when a user clicks on a listing */}
                <div
                    className=" sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ml-10 justify-center items-center mb-20 overflow-y-auto h-[80vh] no-scrollbar mt-20"
                    style={{ zIndex: 1 }}
                >
                    {/* if the current listing is not null, display the current listing, otherwise display a message prompting the user to click on a listing */}
                    
                    {currentListing !== null ? (
                        <CurrentListing
                            title={currentListing.title}
                            location={currentListing.location}
                            description={currentListing.description}
                            requirements={currentListing.requirements}
                            salary={currentListing.salary}
                            benefits={currentListing.benefits}
                            company={currentListing.company}
                            // Maps through the listingContact array and displays the contact information for each listing as props to the CurrentListing prototype
                            email={
                                listingContact.map((contact) => {
                                    if (currentListing.contact === contact._id) {
                                        return contact.email;
                                    }
                                    return null;
                                })
                            }
                            phone={
                                listingContact.map((contact) => {
                                    if (currentListing.contact === contact._id) {
                                        return contact.phone;
                                    }
                                    return null;
                                })
                            }
                            website={currentListing.website}
                        />

                    ) : ( // if the current listing is null, display a message prompting the user to click on a listing
                        <div>
                            <h1>Click on a job listing to see more details!</h1>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
