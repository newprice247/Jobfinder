import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import search from "../../utils/API";


export default function Homepage() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch data from MongoDB using your API utility
        search.fetchDataFromMongoDB()
            .then((data) => setListings(data))
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
                    requirements={listing.requirements}
                    salary={listing.salary}
                    benefits={listing.benefits}
                    contact={listing.contact}
                    website={listing.website}
                />
            ))}
            {listings.length === 0 && <h2>No results found</h2>}
        </div>
        </>
    );
    }