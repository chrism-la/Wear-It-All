import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowCard() {
return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy</Button>
        <Button variant="primary">Update</Button>
        </Card.Body>
    </Card>
    );
}

export default ShowCard;