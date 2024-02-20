// folder components - file list.js

import ListGroup from "react-bootstrap/ListGroup";

function MyList() {
    return (
        <ListGroup>
            <ListGroup.Item>Phone Number: 1800-555-1234</ListGroup.Item>
            <ListGroup.Item>Hours of Operation: Mon-Fri 9am to 5pm </ListGroup.Item>
            <ListGroup.Item>Email: customerservice@wearitagainwardrobe.com</ListGroup.Item>
            <ListGroup.Item>Address: 1234 Main Street, Cloud, USA</ListGroup.Item>
        </ListGroup>
    );
}

export default MyList;
