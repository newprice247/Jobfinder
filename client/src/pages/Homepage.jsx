import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import search from "../../utils/API";


export default function Homepage() {
    const [listings, setListings] = useState([]);
    const [listingContact, setListingContact] = useState([]);

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
    return (
        <>
            <div>
                            {listings.map((listing) => (
                                <JobListing

                                    key={listing._id}
                                    title={listing.title}
                                    location={listing.location}
                                    description={listing.description}
                                    // requirements={listing.requirements}
                                    salary={listing.salary}
                                    benefits={listing.benefits}
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
                                />
                            ))}
            </div>
        </>
    );

    return (
        <>
            
            <JobListing />

        </>
    )
}