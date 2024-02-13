import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function ShowCard({ imageData }) {
    const navigate = useNavigate();
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
                console.log('Item deleted successfully');
            } else {
                console.error('Failed to delete Item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleCardClick = (imageData) => {
        navigate('/update', { state: { imageData }});
    };
    return (
        <Card className="row justify-content-center mx-auto w-50 min-vw-50 p-2 ">
            <Card.Img variant="top" src={imageData.image} alt={imageData.image} />
            <Card.Body>
                <Card.Title className="text-center">{imageData.name}</Card.Title>
                <Card.Text className="text-center">price, description.</Card.Text>

                <Button type="" className="" onClick={handleBuyClick}>
                    Buying
                </Button>
                <Button type="" className="" onClick={() => handleCardClick(imageData)}>
                    Update
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ShowCard;
