import React from "react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// imports the authentification function from the auth.js file, handles the logged in user's token and information
import Auth from "../../utils/auth";
// imports the api functions from the API.js file, used to fetch the listings and user models from the database, as well as update and delete listings
import search from "../../utils/API";
import { updateListing, deleteListing } from "../../utils/API";
// imports the create listing modal from the components folder
import CreateListingModal from "../components/CreateListingModal";

export default function UserCreatedListings() {
  // handles the state of the open variable, used to determine whether the accordion is open or closed
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // sets the listings to an empty array, is used by the map function to display the listings fetched from the database
  const [listings, setListings] = useState([]);
  // Using useState to set the updatedListing to an empty object, is used to store the information entered into the form by the user
  const [updatedListing, setUpdatedListing] = useState({});
  // Using useState to set the categories to an empty array, is used by the map function to display the categories fetched from the database in the dropdown menu
  const [categories, setCategories] = useState([]);
  // sets the user to an empty object, is used to store the logged in user's information
  const [user, setUser] = useState({});
  // sets the savedByUsers to an empty array, is used by the map function to display the users who have saved the listing
  const [savedByUsers, setSavedByUsers] = useState([]);
  // fetches the logged in user's id from the auth.js file
  const userId = Auth.getProfile().data._id;
  // handles the form submit event, used to update the listing in the database
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedListing({ ...updatedListing, [name]: value });
  };
  // searches the database for the logged in user's information and sets the user state to the response
  useEffect(() => {
    search
      .fetchUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);
  // searches the database for the categories and sets the categories state to the response
  useEffect(() => {
    search
      .fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // searches the database for the listings and sets the listings state to the response, then filters the listings to only display the listings created by the logged in user, then fetches the user models for each user who has saved the listing and sets the savedByUsers state to the response, then maps through the listings and sets the category to the category name instead of the category id
  useEffect(() => {
    if (categories.length && user._id) {
      search
        .fetchListings()
        .then((data) => {
          // filters the listings to only display the listings created by the logged in user
          const userCreatedListings = data.filter(
            (listing) => listing.contact === user._id
          );
          // sets the listings state to the response
          setListings(userCreatedListings);
          // fetches the user models for each user who has saved the listing and sets the savedByUsers state to the response
          const savedByUsersPromises = userCreatedListings.map((listing) => {
            return Promise.all(
              listing.savedBy.map((userId) => search.fetchUser(userId))
            );
          });
          // maps through the listings and sets the category to the category name instead of the category id
          Promise.all(savedByUsersPromises)
            .then((savedByUsers) => {
              setSavedByUsers(savedByUsers);
            })
            .catch((error) =>
              console.error("Error fetching saved by users:", error)
            );
            // maps through the listings and sets the category to the category name instead of the category id
          const updatedCategory = userCreatedListings.map((listing) => {
            return {
              ...listing,
              category: categories.find(
                (category) => category._id === listing.category
              ).name,
            };
          });
          // sets the listings state to the updatedCategory, which is the listings with the category name instead of the category id
          setListings(updatedCategory);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [categories, user._id]);
  // maps through the listings and sets the category to the category id instead of the category name
  useEffect(() => {
    if (categories.length) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].name === updatedListing.category) {
          setUpdatedListing({ ...updatedListing, category: categories[i]._id });
        }
      }
    }
  }, [categories, updatedListing]);

  // if there are no listings, displays a message to the user to create a listing, otherwise maps through the listings and displays the listings in an accordion, with the option to update or delete the listing
  if (!listings.length) {
    return (
      <>
        <h3 className="text-myColor-2">
          You haven't created any listings yet!
        </h3>
        {/* displays the imported create listing component */}
        <CreateListingModal />
      </>
    );
  } else {
    return (
      <div
        className="bg-myColor-3 rounded-md shadow-md p-4 border border-gray-300"
      >
        {/* maps through the listings and displays the listings in an accordion, with the option to update or delete the listing */}
        {listings.map((listing, index) => (
          <div key={listing._id}>
            <Accordion
              open={open === listing._id}
            >
              <AccordionHeader
                onClick={() =>
                  handleOpen(listing._id)
                }
                className="bg-myColor-2 text-myColor-1 rounded-md p-2"
              >
                {listing.title}
              </AccordionHeader>
              <AccordionBody>
                <form>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder={listing.title}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}>
                        {categories.map((category) => (
                          <option value={category.name} key={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        placeholder={listing.description}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="requirements">Requirements</label>
                      <textarea
                        name="requirements"
                        id="requirements"
                        placeholder={listing.requirements}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder={listing.location}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="salary">Salary</label>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder={listing.salary}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="benefits">Benefits</label>
                      <textarea
                        name="benefits"
                        id="benefits"
                        placeholder={listing.benefits}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder={listing.company}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        placeholder={listing.website}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-myColor-2 text-xl"
                        htmlFor="savedBy">
                        Saved By:
                      </label>
                      {/* maps through the savedByUsers and displays the users who have saved the listing */}
                      {savedByUsers[index]?.map((sbUser) => (
                        <ol className="flex flex-col gap-4 border-2 border-gray-300 rounded-md p-4 bg-white">
                          <li className="text-myColor-1 text-lg" key={sbUser._id}>
                            <span className="font-bold">UserName:</span> {sbUser.username}
                          </li>
                          <li className="text-myColor-1 text-lg" key={sbUser._id}>
                            <span className="font-bold">Email:</span>{" "}
                            <a className="text-blue-500 hover:underline" href={`mailto:${sbUser.email}`}>
                              {sbUser.email}
                            </a>
                          </li>
                          <li className="text-myColor-1 text-lg" key={sbUser._id}>
                            <span className="font-bold">Phone Number:</span>{" "}
                            <a className="text-blue-500 hover:underline" href={`tel:${sbUser.phone}`}>
                              {sbUser.phone}
                            </a>
                          </li>
                          <li className="text-myColor-1 text-lg" key={sbUser._id}>
                            <span className="font-bold">Bio:</span> {sbUser.bio ? sbUser.bio : sbUser.username + " has not yet written a bio."}
                          </li>
                          <li className="text-myColor-1 text-lg" key={sbUser._id}>
                            <span className="font-bold">Resume:</span>{" "}
                            <a
                              className="text-blue-500 hover:underline"
                              href={sbUser.resumeUrl ? sbUser.resumeUrl : "#"}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {sbUser.resumeUrl ? "View Resume" : "No Resume Uploaded"}
                            </a>
                          </li>
                        </ol>
                      ))}
                      {/* if no one has saved the listing, displays a message to the user */}
                      {savedByUsers[index]?.length === 0 && (
                        <h3 className="text-myColor-2">
                          No one has saved this listing yet!
                        </h3>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      type="submit"
                      className="bg-neutral-800 text-white rounded-md px-2 py-1"
                      onClick={() => {
                        updateListing(listing._id, updatedListing);
                      }}>
                      Save
                    </button>
                    <button
                      type="submit"
                      className="bg-red-500 text-white rounded-md px-2 py-1"
                      onClick={() => {
                        deleteListing(listing._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </form>
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    );
  }
}
