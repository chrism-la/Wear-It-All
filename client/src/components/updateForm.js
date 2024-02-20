// folder client with a folder components with a file updateForm.js

import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

const UpdateForm = ({ imageData }) => {
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [description, setDescription] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showNetworkErrorModal, setShowNetworkErrorModal] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleDrop = (event) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:3127/items/${imageData.item_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        item_id: "",
                        name: title,
                        image: imageUrl,
                        price: price,
                        title: title,
                        zipcode: zipcode,
                        description: description,
                    }),
                }
            );

            if (response.ok) {
                setShowSuccessModal(true);
                setTimeout(() => setShowSuccessModal(false), 5000); // Close modal after 5 seconds
            } else {
                setShowErrorModal(true);
                setTimeout(() => setShowErrorModal(false), 5000); // Close modal after 5 seconds
            }
        } catch (error) {
            console.error("Error updating item:", error);
            setShowNetworkErrorModal(true);
            setTimeout(() => setShowNetworkErrorModal(false), 5000); // Close modal after 5 seconds
        }

        setImage(null);
        setPrice("");
        setTitle("");
        setZipcode("");
        setDescription("");
    };

    return (
        <Container>
            <main>
                <h3 style={{ fontSize: "25px", color: "#7aada0" }}>
                    Update Form
                </h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formImage">
                        <Form.Label>
                            <p className="hidden">Click to upload image into inventory</p>
                        </Form.Label>
                        <div
                            className="image-upload-field"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{ maxWidth: "100%" }}
                                />
                            ) : (
                                <p className="hidden">
                                    Drag and Drop image here to upload into inventory
                                </p>
                            )}
                        </div>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formImageURL">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Image URL Here"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formZipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        className="updateButton"
                        style={{
                            backgroundColor: "lightblue",
                            color: "black",
                            borderColor: "#7adda0",
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                        type="submit"
                    >
                        Submit
                    </Button>

                    <Modal
                        show={showSuccessModal}
                        onHide={() => setShowSuccessModal(false)}
                    >
                        <Modal.Body>Item updated successfully!</Modal.Body>
                    </Modal>

                    <Modal
                        show={showErrorModal}
                        onHide={() => setShowErrorModal(false)}
                    >
                        <Modal.Body>
                            Failed to update item. Please try again.
                        </Modal.Body>
                    </Modal>

                    <Modal
                        show={showNetworkErrorModal}
                        onHide={() => setShowNetworkErrorModal(false)}
                    >
                        <Modal.Body>
                            Network error. Please check your connection and try
                            again.
                        </Modal.Body>
                    </Modal>
                </Form>
            </main>
        </Container>
    );
};

export default UpdateForm;
