// components folder - header file
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import "../App.css";

export default function Header(){
    return (
        <div className="d-flex flex-column align-items-center">
            <Navbar bg="light" expand="lg">
                <Container className="flex-column align-items-center">
                    <Navbar.Brand  className= "" as={Link} to="/">
                        <Button className= "mb-4" style={{backgroundColor: "#d6d6d6", margin: "4px", padding: "5px", border: "5px"}} >Home</Button>

                        <h1 className="mb-2" style={{ fontSize: "30px",  marginTop: "10px", marginRight: "2px", color: "#472836", textAlign:"center", textShadow: "2px 2px 4px"}}>
                            Wear it Again Wardrobe
                        </h1>

                        <img className="logo"
                            src="https://www.pinclipart.com/picdir/big/567-5671881_clothes-hanger-clipart-png-download.png"
                            alt="Logo"
                            width="75"
                            height="50"
                        />
                        
                    </Navbar.Brand>
                    <h4 className="mb-2" style={{fontSize: "20px", color: "#c6d2cf", textAlign:"justify", textShadow: "2px 2px 4px black"}}>
                        from our closet to yours
                        </h4>
                </Container>
            </Navbar>
            <Container className="">
            
            <Navbar  bg="" expand="sm">
                <Nav className="" >
                    <LinkContainer style={{backgroundColor: "#d6d6d6", marginTop: "-80px", marginBottom: "20px", textShadow: "1px 1px 1px #472836" }} to="/buy">
                        <Nav.Link className="btn btn-outline-success me-2">BUY</Nav.Link>
                    </LinkContainer>

                    <LinkContainer style={{backgroundColor: "#d6d6d6", marginTop: "4px", marginBottom: "20px", textShadow: "1px 1px 1px #472836"}} to="/sell">
                        <Nav.Link className="btn btn-outline-success me-2">SELL</Nav.Link>
                    </LinkContainer>

                    <LinkContainer style={{backgroundColor: "#d6d6d6", marginTop: "4px", marginBottom: "-30px", textShadow: "1px 1px 1px #472836"}} to="/gift">
                        <Nav.Link className="btn btn-outline-success me-2">GIFT</Nav.Link>
                    </LinkContainer>
                </Nav>
                
        </Navbar>
            </Container>
        </div>
    )
};