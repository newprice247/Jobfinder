import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Collapse,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

// imports the search function from the API.js file, used to fetch the listings and user models from the database
import Auth from "../../utils/auth";
// imports the api functions from the API.js file, used to fetch the listings and user models from the database, as well as add new listings to the database
import { newListing } from "../../utils/API";
import search from "../../utils/API";

export default function CollapseDefault() {
  // handles the state of the open variable, used to determine whether the modal is open or closed
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  // Using useState to set the possibleCategories to an empty array, is used by the map function to display the categories fetched from the database in the dropdown menu
  const [possibleCategories, setPossibleCategories] = useState([]);
  useEffect(() => {
    search
      .fetchCategories()
      .then((data) => {
        setPossibleCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);
  // Using useState to set the newJobListing to an empty object, is used to store the information entered into the form by the user
  const [newJobListing, setNewJobListing] = useState({
    contact: Auth.getProfile().data._id,
    title: "",
    category: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    benefits: "",
    company: "",
    website: "",
  });
  // handles the form submit event, used to add the new listing to the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await newListing(newJobListing);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button onClick={toggleOpen} className="text-center mb-4">
        New Listing
      </Button>
      <Collapse open={open}>
        <Card className="mx-auto w-[80vw] overflow-x-auto bg-myColor-6 mb-20">
          <CardBody className="flex flex-col flex-wrap gap-4 w-[70vw] h-4/5 my-4 mx-auto">
            <div className="text-center">
              <Typography variant="h4" color="blue-gray">
                New Listing
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray">
                Give us some details about the job:
              </Typography>
            </div>
            <Typography className="-mb-2" variant="h6">
              Title
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Title"
              id="title"
              size="lg"
              // onChange event handler, used to update the newJobListing object with the information entered into the form by the user
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Category
            </Typography>
            {/* if the possibleCategories array is not empty, displays the dropdown menu, otherwise displays a loading message */}
            {possibleCategories ? (
              <select
                id="category"
                className="border-2 border-gray-300 rounded-md bg-myColor-3 w-full p-2"
                onChange={(event) => {
                  const { id, value } = event.target;
                  setNewJobListing({ ...newJobListing, [id]: value });
                }}>
                  {/* maps through the possibleCategories array, used to display the categories fetched from the database in the dropdown menu */}
                <option value="">Select a category</option>
                {possibleCategories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            ) : (
              <select>
                <option>Loading...</option>
              </select>
            )}

            <Typography className="-mb-2" variant="h6">
              Description
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Description"
              id="description"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Location
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Location"
              id="location"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Salary
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Salary"
              id="salary"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Benefits
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Benefits"
              id="benefits"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Company Name
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Company Name"
              id="company"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Company Website
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Company Website"
              id="website"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Requirements
            </Typography>
            <Input
              className="!bg-myColor-3"
              label="Requirements"
              id="requirements"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={(event) => {
                handleFormSubmit(event);
                toggleOpen();
                window.location.reload();
              }}
              fullWidth>
              Post New Listing
            </Button>
          </CardFooter>
        </Card>
      </Collapse>
    </>
  );
}