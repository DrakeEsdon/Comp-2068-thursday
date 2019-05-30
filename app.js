const express = require('express');
const path = require('path');

const app = express();

// Our views path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//our routes
const routes = require('./routes.js');
app.use('/', routes);

//dynamic port listening
const port = process.env.PORT || 4000;       
app.listen(port, () => console.log(`Listening on port ${port}`));

// Our Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));