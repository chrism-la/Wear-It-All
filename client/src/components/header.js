// components folder - header file
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import "../App.css";

export default function Header() {
    return (
        <>
            <div className="d-flex flex-row align-items-center">
                <Navbar bg="" expand="lg">
                    <Container className="flex-row align-items-center">
                        <Navbar.Brand className="" as={Link} to="/">
                            <Button style={{backgroundColor: "#7aada0", color: "black", borderColor: "lightblue"}}>Home</Button>

                            <h1
                                style={{
                                    fontSize: "30px",
                                    color: "#472836",
                                    textShadow: "2px 2px 3px #136b55",
                                    
                                    width: "100vw",
                                    padding: "15px 5px 5px 15px",
                                }}
                            >
                                Wear it Again Wardrobe
                            </h1>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>

            <div style={{ background: "#7aada0" }}>
                <Container className="flex-row align-items-center">
                    <Navbar>
                        <Nav className="">
                            <LinkContainer to="/buy">
                                <Nav.Link className="">BUY</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/sell">
                                <Nav.Link className="">SELL</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/gift">
                                <Nav.Link className="">GIFT</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                </Container>
            </div>

            <h4 style={{
                                    fontSize: "18px",
                                    color: "#472836",
                                    textShadow: "2px 2px 8px #136b55",
                                    boxSizing: "border-box",
                                    width: "100vw",
                                    textAlign: "center",
                                }}>from our closet to yours</h4>
        </>
    );
}
