// folder components - file list.js

import ListGroup from "react-bootstrap/ListGroup";

function MyList() {
    return (
        <ListGroup>
            <ListGroup.Item style={{ backgroundColor: "#c6d2cf"}} >Phone Number: 1800-555-1234</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#d6d6d6"}} >Hours of Operation: Mon-Fri 9am to 5pm </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#c6d2cf"}} >Email: customerservice@wearitagainwardrobe.com</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#d6d6d6"}} >Address: 1234 Main Street, Cloud, USA</ListGroup.Item>
        </ListGroup>
    );
}

export default MyList;
