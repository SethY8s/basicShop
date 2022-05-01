import React, { useState, useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'

function Navbarcomp({ cart }) {
  const[cartCount, setCartCount] = useState(0)
  const location = useLocation()


  useEffect(()=> {
    let count = 0;
    cart.forEach(item=>{
      count += item.qty
    })
    setCartCount(count);
  }, [cart, cartCount])
  
  const { currentUser } = useAuth();

  const checker = () => {
    if (currentUser === null) {
      return (
        <div className="mx-auto">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
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

  
  if(location.pathname === '/login') {
    return null
  }
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> Your Website </Link>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
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

const mapStateToProps = state => {
  return{
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbarcomp)