const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware

app.use(express.json());
app.use(cors());
// Handle OPTIONS request for the specific endpoint
app.options('/items/new', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/sell');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});



// CONTROLLERS
const itemsController = require('./controllers/items_controllers');
app.use('/items', itemsController);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
});
