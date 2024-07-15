import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import iciciLogo from '../images/Logo.svg'; // Adjust the path as necessary
import '../css/NavigationBar.css'; // Import the CSS file

function NavigationBar({ links }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={iciciLogo}
            width="200"
            height="50"
            className="icicilogo"
            alt="ICICI Direct Logo"
          />
          <span className="ms-2"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto custom-nav">
            {links.map((link, index) => (
              <React.Fragment key={link.to}>
                <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
                {index < links.length - 1 && <span className="separator ms-2">|</span>}
              </React.Fragment>
            ))}
          </Nav>
          <Button variant="outline-danger" className="orange-button ms-lg-auto" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
