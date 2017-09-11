import * as React from "react";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";

export default (props) => (
    <div className="header">
        <div className="content-adjust">
            <Navbar fluid={true} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/assets/images/logo.png" alt="logo" className="img-responsive logo" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav pullRight className="header-profile header-menu">
                    some user
                </Nav>
            </Navbar>
        </div>
    </div>
);