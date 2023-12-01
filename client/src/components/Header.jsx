// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// export default function Header() {
//   return (
//     <Navbar expand="lg" className="bg-dark fixed-top">
//       <Container>
//         <Navbar.Brand href="#home" className='text-light'>Jobfinder</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />


//       </Container>
//       <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Link to="/" className="nav-link text-light">Home</Link>
//             <Link to="/user-profile" className="nav-link text-light">User Profile</Link>
//             <Link to="/login" className="nav-link text-light">Login</Link>
//           </Nav>
//         </Navbar.Collapse>
//     </Navbar>
//   );
// }

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

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        to={'/'}
        className="text-lg"
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <p className="flex items-center">
            Home
          </p>
        </Typography>
      </Link>

      <Link
        to={'/user-profile'}
        className="text-lg"
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <p className="flex items-center">
            User Profile
          </p>
        </Typography>
      </Link>

    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-myColor-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
            <Link
            to={'/login'}
            className=""
            >
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
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
          {navList}
          <div className="flex items-center gap-x-1">
            <Link
            to={'/login'}
            className=""
            >
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}