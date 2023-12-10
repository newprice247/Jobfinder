import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import search from "../../utils/API";
import Auth from "../../utils/auth";
 
export default function UserCreatedListings() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [listings, setListings] = useState([]);
    const [user, setUser] = useState({});
    const userId = Auth.getProfile().data._id;
    useEffect(() => {
        search.fetchUser(userId)
            .then((data) => setUser(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [userId]);
    useEffect(() => {
        search.fetchListings()
            .then((data) => {
                const userCreatedListings = data.filter((listing) => listing.contact === user._id);
                setListings(userCreatedListings);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [user]);

if (!listings.length) {
    return <h3 className="text-myColor-2">You haven't created any listings yet!</h3>;
} else {
    return (
    <>
        {listings.map((listing, i) => (
            <div key={i}>
                <Accordion open={open === listing[i]}>
                    <AccordionHeader onClick={() => handleOpen(listing[i])}>
                        {listing.title}
                    </AccordionHeader>
                    <AccordionBody>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-myColor-2 text-lg">Description:</h3>
                            <p className="text-myColor-2">{listing.description}</p>
                            <h3 className="text-myColor-2 text-lg">Requirements:</h3>
                            <p className="text-myColor-2">{listing.requirements}</p>
                            <h3 className="text-myColor-2 text-lg">Location:</h3>
                            <p className="text-myColor-2">{listing.location}</p>
                            <h3 className="text-myColor-2 text-lg">Salary:</h3>
                            <p className="text-myColor-2">{listing.salary}</p>
                            <h3 className="text-myColor-2 text-lg">Benefits:</h3>
                            <p className="text-myColor-2">{listing.benefits}</p>
                            <h3 className="text-myColor-2 text-lg">Company:</h3>
                            <p className="text-myColor-2">{listing.company}</p>
                            <h3 className="text-myColor-2 text-lg">Website:</h3>
                            <p className="text-myColor-2">{listing.website}</p>
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        ))}
    </>
);
}}