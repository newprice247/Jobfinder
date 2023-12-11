import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import search from "../../utils/API";
import Auth from "../../utils/auth";
import { updateListing, deleteListing } from "../../utils/API";
import CreateListingModal from "../components/CreateListingModal";

export default function UserCreatedListings() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [listings, setListings] = useState([]);
  const [updatedListing, setUpdatedListing] = useState({});
  const [savedByUsers, setSavedByUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});
  const userId = Auth.getProfile().data._id;
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedListing({ ...updatedListing, [name]: value });
  };
  useEffect(() => {
    search
      .fetchUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);
  useEffect(() => {
    search
      .fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (categories.length && user._id) {
      search
        .fetchListings()
        .then((data) => {
          const userCreatedListings = data.filter(
            (listing) => listing.contact === user._id
          );
          setListings(userCreatedListings);
          const updatedCategory = userCreatedListings.map((listing) => {
            return {
              ...listing,
              category: categories.find(
                (category) => category._id === listing.category
              ).name,
            };
          });
          setListings(updatedCategory);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [categories, user._id]);

  useEffect(() => {
    if (listings.length) {
      for (let i = 0; i < listings.length; i++) {
        const saveByUserIDs = listings[i].savedBy;
        const saveByUsers = [];
        for (let j = 0; j < saveByUserIDs.length; j++) {
          search
            .fetchUser(saveByUserIDs[j])
            .then((data) => {
              saveByUsers.push(data);
              setSavedByUsers(saveByUsers);
            })
            .catch((error) => console.error("Error fetching data:", error));
        }
      }
    }
  }, [listings]);

  useEffect(() => {
    if (categories.length) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].name === updatedListing.category) {
          setUpdatedListing({ ...updatedListing, category: categories[i]._id });
        }
      }
    }
  }, [categories, updatedListing]);


  if (!listings.length) {
    return (
      <>
        <h3 className="text-myColor-2">
          You haven't created any listings yet!
        </h3>
        <CreateListingModal />
      </>
    );
  } else {
    return (
      <div
        className="bg-myColor-3 rounded-md shadow-md p-4 border border-gray-300"
      >
        {listings.map((listing) => (
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
                      {savedByUsers.map((user) => (
                        <ol className="flex flex-col gap-4 border-2 border-gray-300 rounded-md p-4 bg-white">
                        <li className="text-myColor-1 text-lg" key={user._id}>
                          <span className="font-bold">UserName:</span> {user.username}
                        </li>
                        <li className="text-myColor-1 text-lg" key={user._id}>
                          <span className="font-bold">Email:</span>{" "}
                          <a className="text-blue-500 hover:underline" href={`mailto:${user.email}`}>
                            {user.email}
                          </a>
                        </li>
                        <li className="text-myColor-1 text-lg" key={user._id}>
                          <span className="font-bold">Phone Number:</span>{" "}
                          <a className="text-blue-500 hover:underline" href={`tel:${user.phone}`}>
                            {user.phone}
                          </a>
                        </li>
                        <li className="text-myColor-1 text-lg" key={user._id}>
                          <span className="font-bold">Bio:</span> {user.bio}
                        </li>
                        <li className="text-myColor-1 text-lg" key={user._id}>
                          <span className="font-bold">Resume:</span>{" "}
                          <a
                            className="text-blue-500 hover:underline"
                            href={user.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {user.resumeUrl}
                          </a>
                        </li>
                      </ol>
                      
                      ))}

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
