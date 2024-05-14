import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate, NavigateFunction } from 'react-router-dom';

interface ImageData {
    image: string;
}

interface ImageCardsProps {
    filteredData: ImageData[];
}

const ImageCards: React.FC<ImageCardsProps> = ({ filteredData }) => {
    const navigate = useNavigate() as NavigateFunction;

    const handleCardClick = (imageData: ImageData) => {
        navigate('/show', { state: { imageData } });
    };

    return (
        <div className="container">
            <Row>
                {filteredData.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card onClick={() => handleCardClick(item)}>
                            <Card.Img variant="top" src={item.image} alt={`Image ${index + 1}`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ImageCards;
