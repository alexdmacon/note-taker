const express = require('express');

const htmlRoute = require('./routes/html');
const apiRoute = require('./routes/api');

const app = express();

app.use('/api', apiRoute);
app.use('/', htmlRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Running over at http://localhost:${PORT}`);
})