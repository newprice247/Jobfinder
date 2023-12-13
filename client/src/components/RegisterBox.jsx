import React from "react";
import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
// imports the authentification function from the auth.js file, used to register the user and log them in using json web tokens
import Auth from "../../utils/auth";
// imports the clientside api function from the API.js file, used to add the user to the database
import { createUser } from "../../utils/API";

export default function RegisterBox() {
  // sets the userFormData to an empty object, is used to store the information entered into the form by the user
  const [userFormData, setUserFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  // handles the form submit event, used to add the user to the database
  const handleRegister = async () => {
    try {
      const response = await createUser(userFormData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      // destructure token and user properties from the response object
      const { token, user } = await response.json();
      // pass token and user data to Auth.login() method
      Auth.register(token);
    } catch (err) {
      console.error(err);
    }
  };
  // handles the state of the open variable, used to determine whether the dialog is open or closed
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div
      className="flex items-center justify-center p-6 lg:w-6/12"
      id="register"
      style={{
        background:
          "linear-gradient(to right,#262626, #283618,#606c38)",
      }}
    >
      {/* only shows dialog if user doesn't fill out all form fields */}
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader>
          <h5 className="text-myColor-2">Oops!</h5>
        </DialogHeader>
        <DialogBody>
          <p className="text-myColor-2">Please fill out all form fields to register.</p>
        </DialogBody>
        <DialogFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setOpen(false)}
            ripple="dark"
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>

      {/* register card */}
      <Card color="transparent" shadow={false} className="w-full items-center">
        <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal text-center">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-5">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Ex: John Doe"
              className=" !border-t-myColor-3 focus:!border-t-gray-900 text-myColor-3"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setUserFormData({ ...userFormData, name: e.target.value })
              }
            />
            <Typography variant="h6" color="white" className="-mb-5">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="Ex: johndoe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-myColor-3"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setUserFormData({ ...userFormData, username: e.target.value })
              }
            />
            <Typography variant="h6" color="white" className="-mb-5">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-myColor-3"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setUserFormData({ ...userFormData, email: e.target.value })
              }
            />
            <Typography variant="h6" color="white" className="-mb-5">
              Phone Number
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-myColor-3"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="(555) 555-5555"
              onChange={(e) =>
                setUserFormData({ ...userFormData, phone: e.target.value })
              }
            />
            <Typography variant="h6" color="white" className="-mb-5">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-myColor-3"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setUserFormData({ ...userFormData, password: e.target.value })
              }
              // allows user to submit form by pressing enter
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (userFormData.name === "" || userFormData.username === "" || userFormData.email === "" || userFormData.phone === "" || userFormData.password === "") {
                    handleOpen();
                  } else {
                    handleRegister();
                  }
                }
              }}
            />
          </div>
          <Button
            className="mt-6 text-myColor-3 bg-neutral-600 hover:bg-neutral-200 hover:text-myColor-4"
            fullWidth
            // calls the handleRegister function when the button is clicked
            onClick={() => {
              if (userFormData.name === "" || userFormData.username === "" || userFormData.email === "" || userFormData.phone === "" || userFormData.password === "") {
                handleOpen();
              } else {
                handleRegister();
              }
            }}
          >
            sign up
          </Button>

        </form>
      </Card>
    </div>

  );
}