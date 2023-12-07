import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import Auth from "../../utils/auth";
import { createUser } from "../../utils/API";
import React from "react";


export default function RegisterBox() {
  // hooks for user registration
  const [userFormData, setUserFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  // function to handle user registration
  const handleRegister = async () => {
    try {
      const response = await createUser(userFormData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.register(token);
    } catch (err) {
      console.error(err);
    }
  };
  // dialog state for register button
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
              className=" !border-t-myColor-3 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setUserFormData({ ...userFormData, password: e.target.value })
              }
            />
          </div>
          <Button
            className="mt-6 text-myColor-3 bg-neutral-600 hover:bg-neutral-200 hover:text-myColor-4"
            fullWidth
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