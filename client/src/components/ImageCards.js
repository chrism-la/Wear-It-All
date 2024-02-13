import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ImageCards = ({ filteredData }) => {
    const navigate = useNavigate();

    const handleCardClick = (imageData) => {
        navigate('/show', { state: { imageData } });
    };
    return (
        <CardGroup>
            {filteredData.map((item, index) => (
                <Card key={index} onClick={() => handleCardClick(item)}>
                    <Card.Img variant="top" src={item.image} alt={`ImageCards ${index + 1}`} />
                </Card>
            ))}
        </CardGroup>
    );
};

export default ImageCards;
