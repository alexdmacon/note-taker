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
    
    if (req.body) {
    const newNote = {
        title,
        text,
        note_id: uuidv4(),
    }
    console.log(newNote);
    readAndAppend(newNote, '../db/db.json');
    res.json(newNote)
} else {
    res.error("no dice");
}
});

module.exports = apiRoute;
