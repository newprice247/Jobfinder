import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListingCard";
import search from "../../utils/API";
import { motion } from "framer-motion"
import CurrentListing from "../components/CurrentListing";

export default function Homepage() {
    const [listings, setListings] = useState([]);
    const [listingContact, setListingContact] = useState([]);
    const [currentListing, setCurrentListing] = useState([]);
    const [showListing, setShowListing] = useState(false);

    useEffect(() => {
        search.fetchListings()
            .then((data) => setListings(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        search.fetchUsers()
            .then((data) => setListingContact(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        if (showListing === true) {
            search.fetchListingById(currentListing)
                .then((data) => setCurrentListing(data))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }
        , [showListing]);


    return (
        <>
            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: 10 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap mt-40 justify-center items-center">
                <div
                    className="sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ml-10 justify-center items-center"
                >
                    {listings.map((listing) => (
                        <JobListing

                            key={listing._id}
                            title={listing.title}
                            location={listing.location}
                            description={listing.description}
                            requirements={listing.requirements}
                            salary={listing.salary}
                            benefits={listing.benefits}
                            company={listing.company}
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
                            onClick={() => {
                                console.log(listing._id);
                                setCurrentListing(listing._id);
                                setShowListing(true);
                            }}
                        />
                    ))}
                </div>
                <div
                 className="sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ml-10 justify-center items-center"
                >
                    {showListing === true ? (
                        <CurrentListing
                            title={currentListing.title}
                            location={currentListing.location}
                            description={currentListing.description}
                            requirements={currentListing.requirements}
                            salary={currentListing.salary}
                            benefits={currentListing.benefits}
                            company={currentListing.company}
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
                    ) : (
                        <div>
                            <h1>Click on a job listing to see more details!</h1>
                        </div>
                    )}
                </div>
            </motion.div>



        </>

    );

}
