const fs = require('fs');

const path = require('path');
const apiRoute = require('express').Router();

// for creating randomized unique id numbers/sequences for each saved note
const { v4: uuidv4 } = require('uuid');

const { readNotes, writeNotes } = require('../db/store');
const Note = require ('../db/store');


apiRoute.get('/notes', (req, res) => 
    {readNotes('../db/db.json').then((data) => res.json(JSON.parse(data)))
     }
)

apiRoute.post('/notes', (req, res) => {
    Note.saveNote(req.body).then((data) => res.json(data))
    .catch(err => res.status(500).json(err));;
})

module.exports = apiRoute;