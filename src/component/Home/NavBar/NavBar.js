import React from 'react';
import {  Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'



const NavBar = () => {
  const {user,signOutt} = useAuth()
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#"><h2>MetroLab Solution</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contuct">Contact</Nav.Link>

        <p>{user?.displayName || 'empty user'}</p>
        <img style={{height:'50px',width:'50px',borderRadius:'50px'}} src={user.photoURL || 'Broken img'} alt="" />
        {
          user.email ? <Nav.Link as={Link} onClick={signOutt} to="/log">Log out</Nav.Link> : <Nav.Link as={Link} to="/log">Log in</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;