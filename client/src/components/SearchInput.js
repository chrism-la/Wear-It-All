import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import ImageCards from "./ImageCards";

export default function SearchInput() {
  const [jsonData, setJsonData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:3127/items");
        const jsonData = await response.json();
        setJsonData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = jsonData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setSearch("");
  };

  return (
    <>
      <Navbar className="bg justify-content-between">
        <Form onSubmit={handleSearch}>
          <Row className="row">
            <Col xs="" style={{ paddingLeft: "30px" }}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                style={{ backgroundColor: "lightblue", borderColor: "#7adda0" }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <ImageCards filteredData={filteredData} />}
      {filteredData.length === 0 && <p>No matching results found.</p>}
    </>
  );
}
