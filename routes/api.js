const fs = require('fs');

const path = require('path');
const apiRoute = require('express').Router();

// for creating randomized unique id numbers/sequences for each saved note
const { v4: uuidv4 } = require('uuid');

const { readNotes } = require('../db/store');


apiRoute.get('/api/notes', (req, res) => 
    {readNotes('../db/db.json').then((data) => res.json(JSON.parse(data)))
     }
)

apiRoute.post('/api/notes', (req, res) => {
    
})

module.exports = apiRoute;