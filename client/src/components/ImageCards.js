import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ImageCards = ({ filteredData }) => {
    return (
        <CardGroup>
            {filteredData.map((item, index) => (
                <Card key={index}>
                    <Card.Img variant="top" src={item.image} alt={`ImageCards ${index + 1}`} />
                </Card>
            ))}
        </CardGroup>
    );
};

export default ImageCards;
