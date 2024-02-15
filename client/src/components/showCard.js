import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UpdateForm from "./updateForm";
import "../App.css";

function ShowCard({ imageData }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleBuyClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:3127/items/${imageData.item_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item_id: imageData.item_id }),
        }
      );
      if (response.ok) {
        console.log("Item deleted successfully");
        alert("Item bought successfully");
      } else {
        console.error("Failed to delete Item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  const handleUpdateFormClose = () => {
    setShowUpdateForm(false);
  };

  return (
    <Card className="row justify-content-center mx-auto w-50 min-vw-50 p-2 ">
      <Card.Img variant="top" src={imageData.image} alt={imageData.image} />
      <Card.Body>
        <Card.Title className="text-center">{imageData.name}</Card.Title>
        <Card.Text className="text-center">
          Price: ${imageData.price} | Description: {imageData.description}
        </Card.Text>

        <Button
          type=""
          className=""
          style={{
            backgroundColor: "#7aada0",
            border: "2px solid #d6d6d6",
            padding: "5px",
            marginLeft: "2px",
          }}
          onClick={handleBuyClick}
        >
          Buying
        </Button>
        <Button type="" className="" onClick={handleUpdateClick}>
          Update
        </Button>

        {showUpdateForm && (
          <UpdateForm imageData={imageData} onClose={handleUpdateFormClose} />
        )}
      </Card.Body>
    </Card>
  );
}

export default ShowCard;
