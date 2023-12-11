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
  }, [categories, user]);
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
      <div className="bg-myColor-3">
        {listings.map((listing) => (
          <div key={listing._id}>
            <Accordion open={open === listing._id}>
              <AccordionHeader onClick={() => handleOpen(listing._id)}>
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
                      <textarea
                        name="category"
                        id="category"
                        placeholder={listing.category}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleInputChange}
                      />
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
