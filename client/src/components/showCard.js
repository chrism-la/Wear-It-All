import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

function ShowCard() {
    return (
        <Card className="row justify-content-center mx-auto w-50 min-vw-50 p-2 ">
            <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
                <Card.Title className="text-center">Card Title</Card.Title>
                <Card.Text className="text-center">
                    price, description.
                </Card.Text>
                
                    <Button type="" className="">
                        Buying
                    </Button>
                    <Button type="" className="">
                        Update
                    </Button>
            </Card.Body>
        </Card>
    );
}

export default ShowCard;
