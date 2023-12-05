import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { loginUser } from "../../utils/API";
import { useState } from "react";
import Auth from "../../utils/auth";

export default function ExampleV2() {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    console.log(userFormData);
    try {
      const response = await loginUser(userFormData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
    // setUserFormData({
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
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
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
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
                        onChange={(e) =>
                          setUserFormData({
                            ...userFormData,
                            password: e.target.value,
                          })}
                      />

                        {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            
                            style={{
                              background:
                                "linear-gradient(to right, #606c38,#283618,#fefae0, #dda15e)",
                            }}
                            onClick={() => {
                              // handle login
                              let emailVal = document.getElementById("email").value;
                              console.log(emailVal);
                              let passwordVal = document.getElementById("password").value;
                              console.log(passwordVal);
                              setUserFormData({
                                email: emailVal,
                                password: passwordVal,
                              
                              });
                              handleLogin();
                              
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
                        <Link
                        to={"/register"}
                        
                        >
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple>
                        </Link>
                        
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right,#606c38,#283618,#fefae0, #dda15e)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}