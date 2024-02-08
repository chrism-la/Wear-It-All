const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware

app.use(express.json());
app.use(cors());

// CONTROLLERS
const itemsController = require('./controllers/items_controllers');
app.use('/items', itemsController);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
});
