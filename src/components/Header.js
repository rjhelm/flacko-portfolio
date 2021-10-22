import React from "react";
import { Navbar, NavbarBrand, NavLink, NavItem } from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import dev from '../assets/images/ryanjdev.png';
import FaGithubSquare from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="#home">
            <img
              alt="Dev Logo"
              src={dev}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          RyanJ_Dev
          </NavbarBrand>
          <NavItem className="d-flex">
              <NavLink href="https://github.com/rjhelm">
                <FaGithubSquare />
              </NavLink>
          </NavItem>
        </Container>
      </Navbar>
    )
}

export default Header;