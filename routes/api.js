const fs = require("fs");

const path = require("path");
const apiRoute = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, writeToFile, readAndAppend } = require("./store");

apiRoute.get("/notes", (req, res) => {
  readFromFile(path.join(__dirname, "../db/db.json")).then((notes) =>
    res.json(JSON.parse(notes))
  );
});

// code that I thought I needed to retrieve notes until I realized I just needed to change note_id to id. What a nightmare.
// apiRoute.get("/notes/:id", (req, res) => {
// const pathname = path.join(__dirname, "../db/db.json");
//   readFromFile(pathname).then((notes) => {

//     const note = JSON.parse(notes).find((n) => { 
//         return n.note_id === req.params.id 
//     });
//     return res.json(note);
//   }).catch(e => { console.log(e) });
// });

apiRoute.post("/notes", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    console.log(newNote);
    readAndAppend(newNote, "../db/db.json");
    res.json(newNote);
  } else {
    res.error("no dice");
  }
});

module.exports = apiRoute;
