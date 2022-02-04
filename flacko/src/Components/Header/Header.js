import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/dev-logo.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="container">
            <Navbar.Brand href="#home" className="nav-brand"> 
                <img 
                    alt=""
                    src={logo}
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                /> {" "}
                RyanJDev
                
            </Navbar.Brand>
            
            <Nav className="nav-links me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#tech">TechStack</Nav.Link>
            </Nav>
            
            </Container>
        </Navbar>
    )
}

export default Header;