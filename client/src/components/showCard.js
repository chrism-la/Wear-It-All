import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import { useNavigate } from "react-router-dom";

function ShowCard({ imageData }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleBuyClick = async () => {
        try {
            const response = await fetch(
                `http://localhost:3127/items/${imageData.item_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ item_id: imageData.item_id }),
                }
            );
            if (response.ok) {
                setModalMessage("Thank you for your purchase");
                setShowModal(true);
            } else {
                setModalMessage("Sorry, this Item is no longer available");
                setShowModal(true);
            }
        } catch (error) {
            setModalMessage("Error Purchasing item");
            setShowModal(true);
        }
    };

    const handleCardClick = (imageData) => {
        navigate("/update", { state: { imageData } });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [showModal]);

    return (
        <>
            <Card className="row justify-content-center mx-auto w-50 min-vw-50 p-2">
                <Card.Img
                    variant="top"
                    src={imageData.image}
                    alt={imageData.image}
                />
                <Card.Body>
                    <Card.Title className="text-center">
                        {imageData.name}
                    </Card.Title>
                    <Card.Text className="text-center">
                        Price: ${imageData.price} <br></br>
                        Description: {imageData.description}<br></br>
                        Zip Code: {imageData.zipcode}
                    </Card.Text>
                    <div style={{ display: "inline-flex" }}>
                        <Button
                            type=""
                            className=""
                            style={{
                                backgroundColor: "#7aada0",
                                border: "2px solid #d6d6d6",
                                padding: "5px",
                                marginLeft: "2px",
                            }}
                            onClick={handleBuyClick}
                        >
                            Buying
                        </Button>
                        <Button
                            type=""
                            className=""
                            style={{
                                backgroundColor: "#7aada0",
                                border: "2px solid #d6d6d6",
                                padding: "5px",
                                marginLeft: "2px",
                            }}
                            onClick={() => handleCardClick(imageData)}
                        >
                            Update
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>{modalMessage}</Modal.Body>
            </Modal>
        </>
    );
}

export default ShowCard;
