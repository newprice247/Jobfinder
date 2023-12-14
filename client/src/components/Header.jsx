import React from "react";
import logo from "../assets/images/logo2.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

// Imports the Link component from react-router-dom, which is used to create links to other pages
import { Link } from "react-router-dom";

// Imports the Auth service, which is used to check if the user is logged in or not
import Auth from "../../utils/auth";

// Exports the Header component to be used in by the App
export default function Header() {
  // Sets the state of the openNav to false and then checks the window size so that the nav bar is only displayed when the window size is less than 960px
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Returns the html for the header component
  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-myColor-1">
        {/* The following code is for the logo and the nav bar links */}
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="text-lg">
            <img 
            className="h-auto w-32 lg:w-60 border-2 rounded-half border-myColor-1"
            src={logo} />
          </Link>

          {/* Checks if the user is logged in or not and displays the appropriate welcome message */}
          {Auth.loggedIn() ? (
            <Link to="/user-profile">
              <Typography
                as="a"
                href="#"
                className="cursor-pointer text-center ml-6 py-1.5 tracking-wide text-md lg:text-2xl font-mono hover:italic">
                Welcome, {Auth.getProfile().data.username}!
              </Typography>
            </Link>
          ) : (
            <Link to="/login">
              <Typography
                as="a"
                href="#"
                className="cursor-pointer text-center ml-6 py-1.5 tracking-wide text-md lg:text-2xl font-mono hover:italic">
                Welcome, Guest!
              </Typography>
            </Link>
          )}
          {/* The following code is for the nav bar links, which are dynamically rendered based on whether the user is logged in or not */}
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="hidden lg:flex items-center">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/user-profile">
                    <Button
                      className="bg-black mr-4 !hover:shadow-lg"
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light">
                      My Profile
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      className="bg-black !hover:shadow-lg"
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light">
                      Home
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/">
                  <Button
                    className="bg-black !hover:shadow-lg"
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light">
                    Home
                  </Button>
                </Link>
              )}

              {/* The following code is for the login and sign up buttons, which are dynamically rendered based on whether the user is logged in or not */}
              <Link to={"/"} className="">
                <Button fullWidth variant="text" size="sm" className="">
                  {Auth.loggedIn() ? (
                    <>
                      <Button
                        className="bg-black !hover:shadow-none"
                        color="blue-gray"
                        buttonType="link"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={Auth.logout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button
                          className="bg-black !hover:shadow-none"
                          color="blue-gray"
                          buttonType="link"
                          size="sm"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="light">
                          Login
                        </Button>
                      </Link>
                    </>
                  )}
                </Button>
              </Link>
            </div>

            {/* The following code is for the hamburger menu, which is only displayed when the window size is less than 960px */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* The following code is for the mobile nav bar, which is only displayed when the window size is less than 960px */}
        <MobileNav open={openNav}>
          <div className="flex flex-row justify-evenly items-center gap-3 mx-3 p-2">
            {/* The following code is for the nav bar links, which are dynamically rendered based on whether the user is logged in or not */}
            {Auth.loggedIn() ? (
              // If the user is logged in, display the following nav bar links
              <>
                <Link to="/">
                  <Button
                    className="bg-black !hover:shadow-lg"
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light">
                    Home
                  </Button>
                </Link>
                <Link to="/user-profile">
                  <Button
                    className="bg-black !hover:shadow-lg"
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light">
                    My Profile
                  </Button>
                </Link>
                <Button
                  className="bg-black !hover:shadow-lg"
                  color="blue-gray"
                  buttonType="link"
                  size="sm"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  onClick={Auth.logout}>
                  Logout
                </Button>
              </>
            ) : (
              // If the user is not logged in, display the following nav bar links
              <>
                <Link to="/">
                  <Button
                    className="bg-black !hover:shadow-lg"
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light">
                    Home
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    className="bg-black !hover:shadow-lg"
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
