import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const ImageCards = ({ filteredData }) => {
    const navigate = useNavigate();

    const handleCardClick = (imageData) => {
        navigate('/show', { state: { imageData } });
    };

    return (
        <div className="container">
            <Row>
                {filteredData.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card onClick={() => handleCardClick(item)}>
                            <Card.Img variant="top" src={item.image} alt={`ImageCards ${index + 1}`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ImageCards;
