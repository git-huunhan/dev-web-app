import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";

import logo from '../img/logo-react.svg';
import avatar1 from '../img/avatar-1.jpg';


export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.toggle1 = this.toggle1.bind(this);
    this.onMouseEnter1 = this.onMouseEnter1.bind(this);
    this.onMouseLeave1 = this.onMouseLeave1.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false
    };

    
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  toggle1() {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }

  onMouseEnter1() {
    this.setState({dropdownOpen1: true});
  }

  onMouseLeave1() {
    this.setState({dropdownOpen1: false});
  }

  render() {
    return (
      <div id="nav-bar" className="fixed-top shadow bg-white">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-4" href="/">
          <img id="logo" src={logo} alt="logo"/>
        </NavbarBrand>
      
        <Collapse className="mr-4" navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/">Trang chủ</Link>
              </NavLink>
            </NavItem>

            <NavItem className="ml-auto">
              <NavLink>
                <Link to="/note">Sổ tay môn học</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
              </Dropdown>
            </NavItem>

            <NavItem>
            <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter1} onMouseLeave={this.onMouseLeave1} isOpen={this.state.dropdownOpen1} toggle1={this.toggle1}>
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
          </Dropdown>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand>
          <Link to="/profile">
            <img className="avatar-topbar" src="https://firebasestorage.googleapis.com/v0/b/dev-web-app-551e1.appspot.com/o/img%2F126791600_2834978416760344_7147554556033642948_n.jpg?alt=media&token=15b69906-df50-4786-bdaa-4a911cdda8e3" alt="logo"/>
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
    );
  }
}
