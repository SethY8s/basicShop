import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export function Navbarcomp() {
  const { currentUser } = useAuth();

  const checker = () => {
    if (currentUser === null) {
      return (
        <div className='mx-auto'>
          <Link to='/login'>
            <Button>Login</Button>
          </Link>
          <Link to='/signup'>
          <Button>Sign Up</Button>
        </Link>
        </div>
          
      );
    } else {
      return (
        <Link to="/profile">
          <Button>
            <strong>Profile:</strong> {currentUser.email}
          </Button>
        </Link>
      );
    }
    // console.log(currentUser)
  };

  return (
    <div className="w-100 pen">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              {checker()}

          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
