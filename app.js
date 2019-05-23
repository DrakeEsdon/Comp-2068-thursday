const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('hey there world!'); 
});

app.get('/about', (req, res) => {
   res.send('I like star gazing at midnight.'); 
});

app.listen(4000, () => console.log('Listening on 4000'));