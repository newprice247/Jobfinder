import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Link } from "react-router-dom";
import { 
  Input, 
  Alert, 
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter, 
} from "@material-tailwind/react";
import { loginUser } from "../../utils/API";
import { useState } from "react";
import Auth from "../../utils/auth";
import RegisterBox from "../components/RegisterBox";
import joblogo from "../assets/images/joblogo.png";

// exports the login page located at '/login'
export default function ExampleV2() {
  // Using useState to set the userFormData to an empty object, is used to store the user's email and password when they login
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  // if the userFormData is not null and is not an object, fetch the user by id and set the userFormData to the data
  const handleLogin = async () => {
    try {
      const response = await loginUser(userFormData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      // sets the token and user data to the local storage
      const { token, user } = await response.json();
      // uses the login function from Auth.js to login the user
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const [registerButtonClicked, setRegisterButtonClicked] = useState(false);
  // Returning the login page as html
  return (
    <section className="h-full bg-myColor-3 items-center justify-center flex">
      <div className="container h-full p-0 md:p-10 items-center mt-5">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                {/* Dialog for login error, only shows if user doesn't fill out all form fields */}
                <Dialog size="sm" open={open} handler={handleOpen}>
                  <DialogHeader>
                    <h5 className="text-myColor-2">Oops!</h5>
                  </DialogHeader>
                  <DialogBody>
                    <p className="text-myColor-2">Please enter your email and password to login.</p>
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
                {/* Login form */}
                <div className="px-4 md:px-0 lg:w-6/12 w-full md:w-auto">
                  <div className="md:mx-6 md:p-12 text-xxs sm:text-sm md:text-base">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={joblogo}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Welcome to Jobfinder
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <Input
                        size="lg"
                        type="email"
                        id="email"
                        placeholder="name@email.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        // sets the userFormData to the user's email when they type in the email input
                        onChange={(e) =>
                          setUserFormData({
                            ...userFormData,
                            email: e.target.value,
                          })}
                      />
                      {/* <!--Password input--> */}
                      <Input
                        size="lg"
                        type="password"
                        id="password"
                        placeholder="Password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        // sets the userFormData to the user's password when they type in the password input
                        onChange={(e) =>
                          setUserFormData({
                            ...userFormData,
                            password: e.target.value,
                          })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // sets the form data to the user's email and password as variables
                            let emailVal = document.getElementById("email").value;
                            let passwordVal = document.getElementById("password").value;
                            // sets the userFormData to the user's email and password
                            setUserFormData({
                              email: emailVal,
                              password: passwordVal,
                            
                            });
                            // calls the handleLogin function
                            handleLogin();
                          }}
                        }
                      />

                        {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-myColor-3 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            
                            style={{
                              background:
                                "linear-gradient(to right, #dda15e, #606c38,#283618)",
                            }}
                            // when the user clicks the login button, the userFormData is set to the user's email and password, and the handleLogin function is called
                            onClick={() => {
                              if (userFormData.email === "" || userFormData.password === "") {
                                handleOpen();
                                return;
                              }
                              // sets the form data to the user's email and password as variables
                              let emailVal = document.getElementById("email").value;
                              let passwordVal = document.getElementById("password").value;
                              // sets the userFormData to the user's email and password
                              setUserFormData({
                                email: emailVal,
                                password: passwordVal,
                              
                              });
                              // calls the handleLogin function
                              handleLogin();
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                // sets the form data to the user's email and password as variables
                                let emailVal = document.getElementById("email").value;
                                let passwordVal = document.getElementById("password").value;
                                // sets the userFormData to the user's email and password
                                setUserFormData({
                                  email: emailVal,
                                  password: passwordVal,
                                
                                });
                                // calls the handleLogin function
                                handleLogin();
                              }
                            }}
                          >
                            Log in
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => { setRegisterButtonClicked(true)} }
                          >
                            Register
                          </button>
                        </TERipple>
                        
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                {registerButtonClicked ? <RegisterBox /> : 
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #262626, #283618, #606c38)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl text-myColor-3 font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm text-myColor-3">
                    "Empowering Careers, Connecting Futures - Your Gateway to Opportunity. Welcome to JobFinder, where we seamlessly bridge talent with opportunities, facilitating your journey to professional success. Discover, connect, and thrive with us."
                    </p>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}