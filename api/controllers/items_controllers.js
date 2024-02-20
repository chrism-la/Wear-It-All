// folder api with a folder controllers with a file items_controllers.js

const items = require('express').Router();
const db = require('../models');
const { Items } = db;

items.get('/', async (req, res) => {
    try {
        const foundItems = await Items.findAll();
        res.status(200).json(foundItems);
    } catch (error) {
        res.status(500).json(error);
    }
});

items.get('/:name', async (req, res) => {
    try {
        const foundItems = await Items.findAll({
            where: { name: req.params.name },
        });
        res.status(200).json(foundItems);
        console.log('found item');
    } catch (error) {
        res.status(500).json(error);
    }
});

// CREATE route

items.post('/new', async (req, res) => {
    try {
        const { name, zipcode, description, price, image } = req.body;
        const newItem = await Items.create({ name, zipcode, description, price, image });
        res.status(200).json({
            message: 'Successfully inserted a new Item',
            data: newItem,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE route
items.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;

        // Check if the item exists
        const itemToDelete = await Items.findByPk(itemId);
        if (!itemToDelete) {
            return res.status(404).json({ message: 'Item not found' });
        }

        //
        await Items.destroy({
            where: {
                item_id: itemId,
            },
        });

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
});
// UPDATE route
items.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const { name, image, price, title, zipcode, description } = req.body;

        console.log('Received PUT request:', req.body);

        // Check if the item exists
        const itemToUpdate = await Items.findByPk(itemId);
        if (!itemToUpdate) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Update the item with the new values
        await Items.update(
            { name, image, price, title, zipcode, description },
            {
                where: {
                    item_id: itemId,
                },
            }
        );

        // Fetch the updated item to send in the response
        const updatedItem = await Items.findByPk(itemId);

        res.status(200).json({
            message: 'Item updated successfully',
            data: updatedItem,
        });
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json(error);
    }
});


module.exports = items;
