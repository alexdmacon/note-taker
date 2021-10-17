

const htmlRoute = require('express').Router();
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