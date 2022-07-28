import React from 'react';
import Link from '../routes/Link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Menu = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">Para</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/about-us">About Us</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/user-services">User Services</Link>
            <Link href="/business">Para for Business</Link>
            <Link href="/contact-us">Contact Us</Link>
          </Nav>
          <Nav>
            <Button variant="outline-light">Become a Driver</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

// <Link href="/" className="item">
//           Para
//         </Link>
//         <Link href="/search" className="item">
//           About
//         </Link>
//         <Link href="/dropdown" className="item">
//           User Services
//         </Link>
//         <Link href="/translate" className="item">
//           Para for Business
//         </Link>
//         <Link href="/count" className="item">
//           Contact Us
//         </Link>
//         <Link href="/todo" className="item">
//           Become a ParaDrvier
//         </Link>
