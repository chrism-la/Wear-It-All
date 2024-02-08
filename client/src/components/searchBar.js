// folder components - file searchBar.js
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import React, { useEffect } from 'react';

export default function searchBar() {
    // const [search, setSearch] = useState('');

    // const onSubmitForm = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000');
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };

    // useEffect(() => {
    //     onSubmitForm();
    // }, []);

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}
