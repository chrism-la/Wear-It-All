import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

interface UpdateFormProps {
    imageData: {
        item_id: string;
        name: string;
        image: string;
    };
}

const UpdateForm: React.FC<UpdateFormProps> = ({ imageData }) => {
    const [image, setImage] = useState<File | null>(null);
    const [price, setPrice] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [zipcode, setZipcode] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
    const [showNetworkErrorModal, setShowNetworkErrorModal] = useState<boolean>(false);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(file);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(file);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3127/items/${imageData.item_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item_id: imageData.item_id,
                    name: title,
                    image: price,
                }),
            });

            if (response.ok) {
                setShowSuccessModal(true);
                setTimeout(() => setShowSuccessModal(false), 5000); // Close modal after 5 seconds
            } else {
                setShowErrorModal(true);
                setTimeout(() => setShowErrorModal(false), 5000); // Close modal after 5 seconds
            }
        } catch (error) {
            console.error('Error updating item:', error);
            setShowNetworkErrorModal(true);
            setTimeout(() => setShowNetworkErrorModal(false), 5000); // Close modal after 5 seconds
        }

        setImage(null);
        setPrice('');
        setTitle('');
        setZipcode('');
        setDescription('');
    };

    return (
        <Container>
            <main>
                <h3 style={{ fontSize: '25px', color: '#7aada0' }}>Update Form</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formImage">
                        <Form.Label>
                            <p>Click to upload image into inventory</p>
                        </Form.Label>
                        <div className="image-upload-field" onDrop={handleDrop} onDragOver={handleDragOver}>
                            {image ? <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '100%' }} /> : <p className="hidden">Drag and Drop image here to upload into inventory</p>}
                        </div>
                        <Form.Control type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                    </Form.Group>

                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formZipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control type="text" placeholder="Enter zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>

                    <Button
                        className="updateButton"
                        style={{
                            backgroundColor: 'lightblue',
                            color: 'black',
                            borderColor: '#7adda0',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}
                        type="submit"
                    >
                        Submit
                    </Button>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
                        <Modal.Body>Item updated successfully!</Modal.Body>
                    </Modal>

                    <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                        <Modal.Body>Failed to update item. Please try again.</Modal.Body>
                    </Modal>

                    <Modal show={showNetworkErrorModal} onHide={() => setShowNetworkErrorModal(false)}>
                        <Modal.Body>Network error. Please check your connection and try again.</Modal.Body>
                    </Modal>
                </Form>
            </main>
        </Container>
    );
};

export default UpdateForm;
