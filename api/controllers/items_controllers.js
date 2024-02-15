const items = require("express").Router();
const db = require("../models");
const { Items } = db;

items.get("/", async (req, res) => {
  try {
    const foundItems = await Items.findAll();
    const itemsWithPrice = foundItems.map((item) => ({
      item_id: item.item_id,
      name: item.name,
      image: item.image,
      price: item.price,
      description: item.description,
    }));
    res.status(200).json(itemsWithPrice);
  } catch (error) {
    res.status(500).json(error);
  }
});

items.get("/:name", async (req, res) => {
  try {
    const foundItems = await Items.findAll({
      where: { name: req.params.name },
    });
    res.status(200).json(foundItems);
    console.log("found item");
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE route
items.post("/new", async (req, res) => {
  try {
    const { name, image, price, description } = req.body;

    if (!name || !image || !price || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newItem = await Items.create({ name, image, price, description });

    res.status(201).json({
      message: "Successfully inserted a new Item",
      data: newItem.toJSON(),
    });
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// DELETE route
items.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const itemToDelete = await Items.findByPk(itemId);
    if (!itemToDelete) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Items.destroy({
      where: {
        item_id: itemId,
      },
    });

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

items.put("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const { name, image, price, description } = req.body;

    if (!name && !image && !price && !description) {
      return res.status(400).json({ message: "No fields to update" });
    }

    const itemToUpdate = await Items.findByPk(itemId);
    if (!itemToUpdate) {
      return res.status(404).json({ message: "Item not found" });
    }

    const [rowsUpdated, [updatedItem]] = await Items.update(
      { name, image, price, description },
      {
        where: {
          item_id: itemId,
        },
        returning: true,
      }
    );

    if (rowsUpdated > 0) {
      res.status(200).json({
        message: "Item updated successfully",
        data: updatedItem.toJSON(),
      });
    } else {
      res.status(200).json({ message: "Item not updated" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = items;
