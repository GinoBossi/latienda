import React from "react";
import "./navbar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function NavBar(){
    return (
            <> 
            <Navbar ClassName="brand" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">LATIENDA</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
            );

}


