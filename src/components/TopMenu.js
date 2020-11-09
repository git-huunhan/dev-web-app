import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";

import logo from '../img/logo-react.svg';
import avatar1 from '../img/avatar-1.jpg';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="nav-bar" className="fixed-top shadow bg-white">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-4" href="/">
          <img id="logo" src={logo} alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="mr-4" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/domain">Domain name & Hosting</Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/git">Git</Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/docker">Docker</Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/php">PHP</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand>
          <Link to="/">
            <img className="avatar-topbar" src={avatar1} alt="logo"/>
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopMenu;