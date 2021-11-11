import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavItem, NavLink } from "react-bootstrap";
import { FaGithubSquare } from 'react-icons/fa';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from '../assets/images/my-logo.png';

const Header = () => {
  const [expand, updateExpanded] = React.useState(false);
  const [navColor, updateNavbar] = React.useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <NavbarBrand href="/home">
          <img
            className="logo"
            alt="Dev Logo"
            src={logo}
            width="200"
            height="90"
          />{' '}
          RyanJ_Dev
        </NavbarBrand>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : 'expanded')}
        >
        </NavbarToggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavItem className="d-flex">
            <NavLink href="https://github.com/rjhelm">
              <FaGithubSquare />
            </NavLink>
          </NavItem>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;