const express = require('express');

const htmlRoute = require('./routes/html');
const apiRoute = require('./routes/api');
const store = require('./db/store')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoute);
app.use('/', htmlRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Running over at http://localhost:${PORT}`);
})