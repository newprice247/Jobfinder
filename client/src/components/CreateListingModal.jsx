import React from "react";
import {
  Button,
  Dialog,
  Card,
  Collapse,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import Auth from "../../utils/auth";
import { useState, useEffect } from "react";
import { newListing } from "../../utils/API";
import search from "../../utils/API";

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const toggleOpen = () => setOpen((cur) => !cur);
  const [possibleCategories, setPossibleCategories] = useState([]);
  useEffect(() => {
    search
      .fetchCategories()
      .then((data) => {
        setPossibleCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(newJobListing);
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
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Category
            </Typography>
            {possibleCategories ? (
              <select
                id="category"
                className="border-2 border-gray-300 rounded-md bg-myColor-3 w-full p-2"
                onChange={(event) => {
                  const { id, value } = event.target;
                  setNewJobListing({ ...newJobListing, [id]: value });
                }}>
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
// export default function DialogWithForm() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen((cur) => !cur);

//     return (
//         <>
//             <Button
//                 className="text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
//                 onClick={handleOpen}>Create New Job Listing</Button>
//             <Dialog
//                 size="xs"
//                 open={open}
//                 handler={handleOpen}
//                 className="bg-transparent shadow-none overflow-y-auto no-scrollbar"
//             >

//             </Dialog>
//         </>
//     );
// }
