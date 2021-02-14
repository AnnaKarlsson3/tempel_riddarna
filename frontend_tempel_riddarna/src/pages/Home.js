import React from "react";
import { Container, Row, Col, Navbar, Nav, NavbarBrand, NavLink, NavItem } from "reactstrap";
import { NavLink as RRNavLink, Link } from "react-router-dom";

export default function Home() {




    return (
      <Container fluid={true} className="image">
       <Row>
           <Col className="free-space"></Col>
           </Row>  
        <Row className="nav-row">

            <Navbar className="container-fluid , navbar-main">
            <NavbarBrand className="nav-brand" href="/">ICON</NavbarBrand>
                <Nav >
                    <NavItem className="ml-auto">
                        <NavLink className="nav-link" tag={Link} to={"/"}>
                            Files |
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto">
                        <NavLink className="nav-link" tag={Link} to={"/"}>
                            Gallery |
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto">
                        <NavLink className="nav-link" tag={Link} to={"/"}>
                            Memes |
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto">
                        <NavLink className="nav-link" tag={Link} to={"/"}>
                            Forum 
                        </NavLink>
                    </NavItem>
                </Nav>

             </Navbar>
        </Row>
       
      </Container>
    );
  }