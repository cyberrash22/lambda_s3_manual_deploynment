const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the routes

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Use the routes under /api/v1/
app.use('/api/v1/', routes);

module.exports = app;
