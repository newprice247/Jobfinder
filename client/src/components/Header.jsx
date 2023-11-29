import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Jobfinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        

      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light">Home</Link>
            <Link to="/user-profile" className="nav-link text-light">User Profile</Link>
            <Link to="/login" className="nav-link text-light">Login</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}