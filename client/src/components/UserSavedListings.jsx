import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// imports the authentification function from the auth.js file, used to register the user and log them in using json web tokens
import Auth from "../../utils/auth";
// imports the search function from the API.js file, used to fetch the listings and user models from the database
import search from "../../utils/API";

// imports the motion library for animations
import { motion } from "framer-motion";

export default function UserSavedListings() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Using useState to set the listings and listingContact to an empty array, is used by the map function to display the listings and pull the contact information for each listing from the user models in the database
  const userId = Auth.getProfile().data._id;
  const [savedListings, setSavedListings] = useState([]);
  const [savedListingsInfo, setSavedListingsInfo] = useState([]);
  // Using useState to set the categories to an empty array, is used by the map function to display the category name for each listing
  const [categories, setCategories] = useState([]);

  const [users, setUsers] = useState([]);

  // Using useEffect to fetch the user model from the database, then set the savedListings state to the savedListings array from the user model
  useEffect(() => {
    search
      .fetchUser(userId)
      .then((data) => setSavedListings(data.savedListings))
      .catch((error) => console.error("Error fetching data:", error));
    // Using useEffect to fetch the user models from the database, then set the users state to the users array from the database
    search
      .fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);

  // Using useEffect to fetch the listings and user models from the database, then filter the listings to only display the listings that the user has saved
  useEffect(() => {
    search
      .fetchListings()
      .then((data) => {
        const savedListingsInfo = data.filter((listing) =>
          savedListings.includes(listing._id)
        );
        setSavedListingsInfo(savedListingsInfo);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [savedListings]);
  // Using useEffect to fetch the categories from the database, then set the categories state to the categories array from the database
  useEffect(() => {
    search
      .fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="bg-myColor-3">
      {/* Using the map function to display the listings that the user has saved */}
      {savedListingsInfo.map((listing) => (
        <div key={listing._id}>
          <Accordion open={open === listing._id}>
            <AccordionHeader onClick={() => handleOpen(listing._id)}>
              {listing.title}
            </AccordionHeader>
            <AccordionBody
              className="bg-neutral-100 p-4"
            >
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Job Category:</h2>
              {/* Using the map function to display the category name for each listing */}
              <p className="text-myColor-2 text-lg">{categories.map((category) => {
                if (category._id === listing.category) {
                  return category.name
                }
              })}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Job Description:</h2>
              <p className="text-myColor-2 text-lg">{listing.description}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Salary:</h2>
              <p className="text-myColor-2 text-lg">{listing.salary}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Location:</h2>
              <p className="text-myColor-2 text-lg">{listing.location}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Requirements:</h2>
              <p className="text-myColor-2 text-lg">{listing.requirements}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Benefits:</h2>
              <p className="text-myColor-2 text-lg">{listing.benefits}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Company:</h2>
              <p className="text-myColor-2 text-lg">{listing.company}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Contact:</h2>
              {/* Using the map function to display the contact information for each listing */}
              <p className="text-myColor-2 text-lg">{users.map((user) => {
                if (user._id === listing.contact) {
                  return user.name
                }
              })}</p>
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Email:</h2>
              {users.map((user) => {
                if (user._id === listing.contact) {
                  return (
                    <a className="text-blue-500 text-lg hover:text-myColor-1 "
                    href={`mailto:${user.email}`}>{user.email}</a>
                  )
                }
              })}
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Phone:</h2>
              {users.map((user) => {
                if (user._id === listing.contact) {
                  return (
                    <a className="text-blue-500 text-lg hover:text-myColor-1"
                    href={`tel:${user.phone}`}
                    >{user.phone}</a>
                  )
                }
              })}
              <h2 className="text-myColor-2 text-xl mt-2 mb-1 font-bold ">Website:</h2>
              <a className="text-blue-500 text-lg hover:text-myColor-1 underline"
              href={listing.website}
              >{listing.website}</a>
            </AccordionBody>
          </Accordion>
        </div>
      ))}
      {/* If the user has not saved any listings, display the message below */}
      {savedListingsInfo.length === 0 && (
        <>
          <h3 className="text-myColor-2">
            You haven't saved any listings yet!
          </h3>
        </>
      )}
    </div>
  );
}
