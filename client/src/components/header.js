// components folder - header file
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import "../App.css";

export default function Header() {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <Navbar bg="light" expand="lg">
                    <Container className="flex-row align-items-center">
                        <Navbar.Brand className="" as={Link} to="/">
                            <Button>Home</Button>

                            <h1>Wear it Again</h1>

                            <img
                                className="logo"
                                src="https://www.pinclipart.com/picdir/big/567-5671881_clothes-hanger-clipart-png-download.png"
                                alt="Logo"
                                width="75"
                                height="50"
                            />
                        </Navbar.Brand>
                        
                    </Container>
                </Navbar>
            </div>

            <div>
                <Container className="">
                    <Navbar bg="light" expand="">
                        <Nav className="d-flex flex-row align-items-center">
                            <LinkContainer
                                // style={{
                                //     backgroundColor: "#d6d6d6",
                                //     marginTop: "-80px",
                                //     marginBottom: "20px",
                                //     textShadow: "1px 1px 1px #472836",
                                // }}
                                to="/buy"
                            >
                                <Nav.Link className="">BUY</Nav.Link>
                            </LinkContainer>

                            <LinkContainer
                                // style={{
                                //     backgroundColor: "#d6d6d6",
                                //     marginTop: "4px",
                                //     marginBottom: "20px",
                                //     textShadow: "1px 1px 1px #472836",
                                // }}
                                to="/sell"
                            >
                                <Nav.Link className="">SELL</Nav.Link>
                            </LinkContainer>

                            <LinkContainer
                                // style={{
                                //     backgroundColor: "#d6d6d6",
                                //     marginTop: "4px",
                                //     marginBottom: "-30px",
                                //     textShadow: "1px 1px 1px #472836",
                                // }}
                                to="/gift"
                            >
                                <Nav.Link className="">GIFT</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                </Container>

                <h4>from our closet to yours</h4>

            </div>
        </>
    );
}
