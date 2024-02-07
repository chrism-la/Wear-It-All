// folder views - file home
// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/header";

function Home() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className="d-flex flex-column align-items-center">
                    <Navbar.Brand as={Link} to="/">
                        <Button className="mb-2">Home</Button>

                        <h1 className="mb-2" style={{ fontSize: "24px" }}>
                            Wear it Again Wardrobe
                        </h1>

                        <img
                            src="https://png.pngitem.com/pimgs/s/515-5157272_clothes-hanger-clipart-png-download-transparent-png.png"
                            alt="Logo"
                            width="75"
                            height="50"
                            className="mb-2"
                        />
                        <h5>from our closet to yours</h5>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <nav class="navbar bg-body-tertiary">
                    <form class="container-fluid center-content-start">
                        <button
                            class="btn btn-outline-success me-4"
                            type="button"
                        >
                            BUY
                        </button>
                        <button
                            class="btn btn-outline-success me-4"
                            type="button"
                        >
                            SELL
                        </button>
                        <button
                            class="btn btn-outline-success me-4"
                            type="button"
                        >
                            GIFT
                        </button>
                    </form>
                </nav>
            </Container>
        </div>
    );
}

export default Home;
