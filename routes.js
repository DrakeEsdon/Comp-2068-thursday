const express = require('express');
const app = express();

// Import our page routes

const pageRoutes = require('./routes/pages');

//register our page routes with our app
app.use('/', pageRoutes)

//export changes
module.exports = app;