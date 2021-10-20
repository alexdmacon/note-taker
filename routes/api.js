// importing npm modules we'll need
const fs = require("fs");
const path = require("path");

// importing express and binding it to router-level middleware
const apiRoute = require("express").Router();

// importing npm package that will generate random characters assigned as new note id
const { v4: uuidv4 } = require("uuid");

// importing helper functions
const { readFromFile, writeToFile, readAndAppend } = require("./store");

// get route that reads and returns data in database db.json.
apiRoute.get("/notes", (req, res) => {
  readFromFile(path.join(__dirname, "../db/db.json")).then((notes) =>
    res.json(JSON.parse(notes))
  );
});

// post route to add notes to db.json.
apiRoute.post("/notes", (req, res) => {
  console.log(req.body);

  // request body is user input set to title and text keys
  const { title, text } = req.body;

  // if a request is made containing user input set to title and test keys, create new object and new property of id, assigning random and unique character sequence to each new object.
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    console.log(newNote);
    // add the new Note to the db.json file.
    readAndAppend(newNote, "../db/db.json");
    res.json(newNote);
  } else {
    res.error("no dice");
  }
});

// exports Express router bound to API routes
module.exports = apiRoute;

// below is code that I thought I needed to retrieve notes until I realized I just needed to change note_id to id as a property of newNote. Leaving it because I think something like this might work for a delete route, and I will mess around with it later if I have time.

/* apiRoute.get("/notes/:id", (req, res) => {
const pathname = path.join(__dirname, "../db/db.json");
readFromFile(pathname).then((notes) => {
const note = JSON.parse(notes).find((n) => { 
return n.note_id === req.params.id 
});
return res.json(note);
}).catch(e => { console.log(e) });
}); */
