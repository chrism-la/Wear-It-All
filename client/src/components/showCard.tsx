import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ImageData {
    item_id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    zipcode: string;
}

interface ShowCardProps {
    imageData: ImageData;
}

const ShowCard: React.FC<ShowCardProps> = ({ imageData }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');

    const handleBuyClick = async () => {
        try {
            const response = await fetch(`http://localhost:3127/items/${imageData.item_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ item_id: imageData.item_id }),
            });

            if (response.ok) {
                setModalMessage('Thank you for your purchase');
            } else {
                setModalMessage('Sorry, this item is no longer available');
            }
        } catch (error) {
            setModalMessage('Error purchasing item');
        } finally {
            setShowModal(true);
        }
    };

    const handleCardClick = () => {
        navigate('/update', { state: { imageData } });
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
                <Card.Img variant="top" src={imageData.image} alt={imageData.name} />
                <Card.Body>
                    <Card.Title className="text-center">{imageData.name}</Card.Title>
                    <Card.Text className="text-center">
                        {imageData.price} - {imageData.description} - {imageData.zipcode}
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" style={{ marginRight: '10px' }} onClick={handleBuyClick}>
                            Buy
                        </Button>
                        <Button variant="secondary" onClick={handleCardClick}>
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
};

export default ShowCard;
