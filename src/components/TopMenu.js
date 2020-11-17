import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
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
                <Link to="/">Trang chủ</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown setActiveFromChild>
            <Link to="/webdev">
              <DropdownToggle tag="a" className="nav-link" caret>
                Phát triển ứng dụng web
              </DropdownToggle>
            </Link>
            <DropdownMenu>
              <Link to="/domain">
                <DropdownItem tag="a">
                  Domain name & Hosting
                </DropdownItem>
              </Link>
              
              <Link to="/git"> 
                <DropdownItem tag="a">
                  Git
                </DropdownItem>
              </Link>
              
              
              <Link to="/docker">
                <DropdownItem tag="a">
                  Docker
                </DropdownItem>
              </Link>
              
              <Link to="/php">
                <DropdownItem tag="a">
                  PHP
                </DropdownItem>
              </Link>

            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown setActiveFromChild>
            <Link to="/dbms">
              <DropdownToggle tag="a" className="nav-link" caret>
                Hệ quản trị CSDL
              </DropdownToggle>
            </Link>
            
            <DropdownMenu>
              <Link to="/dbms1">
                <DropdownItem tag="a">
                  Tổng quan DBMS
                </DropdownItem>
              </Link>

              <Link to="/dbms2">
                <DropdownItem tag="a">
                  Kiến trúc DBMS
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
        <NavbarBrand>
          <Link to="/profile">
            <img className="avatar-topbar" src={avatar1} alt="logo"/>
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopMenu;