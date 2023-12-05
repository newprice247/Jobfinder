
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link, useLocation } from 'react-router-dom';
import Auth from "../../utils/auth";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-myColor-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to={'/'}
            className="text-lg"
          >
            <Typography
              as="a"
              href="#"
              className="ml-4 cursor-pointer py-1.5 font-medium"
            >
              Jobfinder
            </Typography>
          </Link>
          <div className="flex-row gap-4 justify-center">
            <div className="mr-4 hidden lg:block">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/user-profile">
                    <Button
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      My Profile
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Home
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/">
                  <Button
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    Home
                  </Button>
                </Link>
              )
              }
              <Link
                to={'/login'}
                className=""
              >
                <Button fullWidth variant="text" size="sm" className="">
                    {Auth.loggedIn() ? (
                      <>
                        <Button
                          color="blue-gray"
                          buttonType="link"
                          size="sm"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="light"
                          onClick={Auth.logout}
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link to="/register">
                          <Button
                            color="blue-gray"
                            buttonType="link"
                            size="sm"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                          >
                            Sign Up
                          </Button>
                        </Link>
                        <Link to="/login">
                          <Button
                            color="blue-gray"
                            buttonType="link"
                            size="sm"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                          >
                            Login
                          </Button>
                        </Link>
                      </>
                    )}
                </Button>
              </Link>

            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
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
                  strokeWidth={2}
                >
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
        <MobileNav open={openNav}>
          <div className="grid-cols-1 items-center gap-x-1">
            {
              Auth.loggedIn() ? (
                <>
                <Link to="/">
                    <Button
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="/user-profile">
                    <Button
                      color="blue-gray"
                      buttonType="link"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      My Profile
                    </Button>
                  </Link>
                  <Button
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={Auth.logout}
                  >
                    Logout
                  </Button>
                  
                </>
              ) : (
                <div>

               
                <Link to="/">
                  <Button
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    color="blue-gray"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    Login
                  </Button>
                </Link>
                </div>
              )
            }
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}