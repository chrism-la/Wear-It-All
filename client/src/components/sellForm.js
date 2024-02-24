//folder client/folder components sellForm.js file
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

const SellForm = () => {
const [image, setImage] = useState(null);
const [price, setPrice] = useState('');
const [title, setTitle] = useState('');
const [zipcode, setZipcode] = useState('');
const [description, setDescription] = useState('');
const [showModal, setShowModal] = useState(false);
const [modalMessage, setModalMessage] = useState('');

const handleSubmit = async (event) => {
event.preventDefault();
try {
const response = await fetch('http://localhost:3127/items/new', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
item_id: '',
name: title,
zipcode: zipcode,
description: description,
price: price,
image: image
}),
});
if (response.ok) {
setModalMessage('Item added Successfully');
} else {
setModalMessage('Failed to add item');
}
setShowModal(true);
} catch (error) {
setModalMessage('Error adding item');
setShowModal(true);
}
setImage('');
setPrice('');
setTitle('');
setZipcode('');
setDescription('');
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
<Container>
<main>
<h3 style={{ fontSize: '25px', color: '#7aada0' }}>Sell Form</h3>
<Form onSubmit={handleSubmit}>
<Form.Group controlId="formImage">
<Form.Label>Image URL</Form.Label>
<Form.Control type="text" placeholder="Enter Image URL Here" value={image || ''} onChange={(e) => setImage(e.target.value)} />
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
className="sellButton"
type="submit"
style={{ backgroundColor: 'lightblue', color: 'black', borderColor: '#7adda0', marginTop: '20px', marginBottom: '20px' }}
>
Submit
</Button>
</Form>

<Modal show={showModal} onHide={() => setShowModal(false)}>
<Modal.Body>{modalMessage}</Modal.Body>
</Modal>
</main>
</Container>
);
};

export default SellForm;