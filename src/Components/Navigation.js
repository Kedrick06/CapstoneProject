import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Icon, Button, Anchor } from "atomize";
import { Link} from 'react-router-dom';

class Navigation extends Component {

    
    render() {

        

        return (
        
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">FireThreads</Navbar.Brand>

        <Button 
            h="1.5rem"
            w="1.5rem"
            bg="warning700"
            hoverBg="warning600"
            rounded="circle"
            m={{ r: "1rem" }}
            shadow="2"
            hoverShadow="4">
        <Anchor href="https://twitter.com/bfloblk">
        <Icon name="Twitter" size="20px" color="white" />
        </Anchor>
        </Button>

        <Button 
            h="1.5rem"
            w="1.5rem"
            bg="warning700"
            hoverBg="warning600"
            rounded="circle"
            m={{ r: "1rem" }}
            shadow="3"
            hoverShadow="4">
        <Anchor href="https://facebook.com/bfloblk">
        <Icon name="Facebook" size="20px" color="white" />
        </Anchor>
        </Button>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
                    <NavDropdown title="Threads" id="collasible-nav-dropdown">
                         <Link to="/">Men's Clothing</Link>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to="/Signin">Sign in</Link>
                </Nav>

            </Navbar.Collapse>
    </Navbar>
    
        )
}}

export default Navigation;