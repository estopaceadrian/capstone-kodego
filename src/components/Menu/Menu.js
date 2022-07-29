import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Menu = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/" onClick={scrollTop} className="text-decoration-none">
            PARA
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-decoration-none  gap-3">
            <Link
              onClick={scrollTop}
              to="/about-us"
              className="text-decoration-none"
            >
              About Us
            </Link>
            <Link
              to="/pricing"
              onClick={scrollTop}
              className="text-decoration-none"
            >
              Pricing
            </Link>

            <Link
              to="/contact-us"
              onClick={scrollTop}
              className="text-decoration-none"
            >
              Contact Us
            </Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary">Become a Driver</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
