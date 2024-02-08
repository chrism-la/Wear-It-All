// components folder - header file
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import "../App.css";

export default function Header(){
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className="d-flex flex-column align-items-center">
                    <Navbar.Brand  className= "" as={Link} to="/">
                        <Button className="mb-2">Home</Button>

                        <h1 className="mb-2" style={{ fontSize: "25px" }}>
                            Wear it Again Wardrobe
                        </h1>

                        <img
                            src="https://www.pinclipart.com/picdir/big/567-5671881_clothes-hanger-clipart-png-download.png"
                            alt="Logo"
                            width="75"
                            height="50"
                            className="mb-2"
                        />
                    </Navbar.Brand>
                    <h5>from our closet to yours</h5>
                </Container>
            </Navbar>

            <Container>
            <Navbar bg="body-tertiary" expand="sm">
            
                <Nav className="mr-auto">
                    <LinkContainer to="/buy">
                        <Nav.Link className="btn btn-outline-success me-3">BUY</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/sell">
                        <Nav.Link className="btn btn-outline-success me-3">SELL</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/gift">
                        <Nav.Link className="btn btn-outline-success me-3">GIFT</Nav.Link>
                    </LinkContainer>
                </Nav>
    
        </Navbar>
            </Container>
        </div>
    )
};