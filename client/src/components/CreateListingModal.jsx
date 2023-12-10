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
import { useState } from "react";
import { newListing } from "../../utils/API";
export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const toggleOpen = () => setOpen((cur) => !cur);
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
      <Button onClick={toggleOpen}>New Listing</Button>
      <Collapse open={open}>
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              New Listing
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray">
              Give us some details about the job:
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Title
            </Typography>
            <Input
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
            <Input
              label="Category"
              id="category"
              size="lg"
              onChange={(event) => {
                const { id, value } = event.target;
                setNewJobListing({ ...newJobListing, [id]: value });
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Description
            </Typography>
            <Input
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
