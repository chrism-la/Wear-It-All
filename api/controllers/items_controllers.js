const items = require('express').Router();
const { Error } = require('sequelize');
const db = require('../models');
const { Items } = db;
// Get route
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

// Create route
items.post('/delete',  (req, res) => {
    try {
        const newItem = await Items.create(req.body)
        res.status(200).json(newItem);
res.status(500).json(error)
} catch (error) {

})

module.exports = items;
