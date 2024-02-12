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
        const { name, image } = req.body;
        const newItem = await Items.create({ name, image });
        res.status(200).json({
            message: 'Succesfully inserted a new Item',
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
        const { name, image } = req.body;
        const itemToUpdate = await Items.findByPk(itemId);
        if (!itemToUpdate) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await Items.update(
            { name, image },
            {
                where: {
                    item_id: itemId,
                },
            }
        );
        const updatedItem = await Items.findByPk(itemId);
        res.status(200).json({
            message: 'Item updated Successfully',
            data: updatedItem,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = items;