// import express
const express = require('express');

// import code used for routing via Express middleware.
const htmlRoute = require('./routes/html');
const apiRoute = require('./routes/api');
const store = require('./routes/store')

// creates an express application we can use
const app = express();

// method that recognizes request objects contained in POSTs as strings or arrays.
app.use(express.urlencoded({ extended: true }));
// recognizes requests as JSON objects (which is why we have to do all the parsing and stringifying elsewhere)
app.use(express.json());
// need this to serve "static" files, like the front-end code in the public folder.
app.use(express.static('public'));

// configures URL our routing middlware will follow, i.e. URL/api/whatever will lead where we tell it to go.
app.use('/api', apiRoute);
app.use('/', htmlRoute);

// assigns PORT to listen where published via Heroku or locally at localhost:3001.
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Running over at http://localhost:${PORT}`);
})