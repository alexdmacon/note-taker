const fs = require("fs");

const path = require("path");
const apiRoute = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, writeToFile, readAndAppend } = require('./store')


apiRoute.get("/notes", (req, res) => {
    readFromFile(path.join(__dirname, '../db/db.json')).then((notes) => res.json(JSON.parse(notes)))
});

apiRoute.post("/notes", (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        note_id: uuidv4(),
    }

    readAndAppend(newNote, '../db/db.json').then(notes => [...notes, newNote])
/*     .then(allNotes => writeToFile(allNotes))
    .then(() => newNote)
    res.json('New note added'); */
});

module.exports = apiRoute;
