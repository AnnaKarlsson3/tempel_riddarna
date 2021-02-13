import React from "react";
import { NavItem, NavLink, Nav, Badge, Navbar, NavbarBrand } from "reactstrap";
import { NavLink as RRNavLink, Link } from "react-router-dom";

export default function Topbar() {
 

  return (
    <div>
        <Navbar className="navbar-custom" light expand="md">
          <NavbarBrand href="/">Tempel Riddarna</NavbarBrand>
          <Nav className="ml-auto" navbar>            
            
            <NavItem>
              <NavLink tag={Link} to={"/"}>
                <p>Login</p>
              </NavLink>
            </NavItem>

            
          </Nav>
        </Navbar>
    
    </div>
  );
}
