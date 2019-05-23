const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('hey there world!'); 
});

app.get('/about', (req, res) => {
   res.send('I like star gazing at midnight.'); 
});

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));