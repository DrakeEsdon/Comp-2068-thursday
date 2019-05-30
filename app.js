//As a note, a lot of the code used in this lab is from class. I hope this isint acedemic msconduct as our class example was very similar to what was being askec in the lab and this is the best way I know how to code this.

const express = require('express');
const path = require('path');

const app = express();

// Our views path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//our routes
const routes = require('./routes.js');
app.use('/', routes);


const port = (process.env.PORT || 4000);
app.listen(4000, () => console.log(`Listening on ${port}`));