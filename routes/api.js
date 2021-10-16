const fs = require('fs');

const path = require('path');
const apiRoute = require('express').Router();

// for creating randomized unique id numbers/sequences for each saved note
const { v4: uuidv4 } = require('uuid');


apiRoute.get('/api/notes', (req, res) => 
    {}
)

module.exports = apiRoute;