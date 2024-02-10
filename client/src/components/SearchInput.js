// folder components - file searchBar.js
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import ImageCards from './ImageCards';

export default function SearchInput() {
    const [jsonData, setJsonData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3127/items');
            const jsonData = await response.json();
            setJsonData(jsonData);
            const filtered = jsonData.filter((item) => item.name.toLowerCase() === search.toLowerCase());
            setFilteredData(filtered);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setSearch('');
    };

    return (
        <>
            <Navbar className="bg justify-content-between">
                <Form onSubmit={handleSearch}>
                    <Row className="row">
                        <Col xs="">
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
            <ImageCards filteredData={filteredData} />
        </>
    );
}
