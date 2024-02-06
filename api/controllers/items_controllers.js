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

module.exports = items;
