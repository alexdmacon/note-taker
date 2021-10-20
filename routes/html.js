// importing express and binding it to router-level middleware
const htmlRoute = require('express').Router();

// importing path module to convert relative paths to absolute paths.
const path = require('path');

// will return notes.html file
htmlRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// will return index.html file
htmlRoute.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = htmlRoute;