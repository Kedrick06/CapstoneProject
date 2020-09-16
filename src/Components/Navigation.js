import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Navigation extends Component {

    
    render() {
        return (
        
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">FireThreads</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#pricing">About</Nav.Link>
                    <NavDropdown title="Threads" id="collasible-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">Men's Clothing</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="Signin.html">Sign in</Nav.Link>
                    <Nav.Link href="Cart.html">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    
        )
}}

export default Navigation;