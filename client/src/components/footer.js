import React from "react";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <div className="footer d-flex flex-column align-items-center mt-3" style={{backgroundColor: "#7aada0", fontSize:"15px"}}>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/contact">Contact Info</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;
