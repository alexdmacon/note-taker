const fs = require("fs");
const util = require("util");

// for creating randomized unique id numbers/sequences for each saved note
const { v4: uuidv4 } = require("uuid");

const writeNotes = util.promisify(fs.writeFile);
const readNotes = util.promisify(fs.readFile);

class Note {
  receiveNotes() {
    return readNotes("./db.json")
      .then((data) => res.json(JSON.parse(data)))
      .then((data) => {
        const parsedData = JSON.parse(data);
        return parsedData;
      });
  }

  saveNote(note) {
    const { title, text } = note;

    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    return this.receiveNotes()
      .then((data) => [...data, newNote])
      .then((allNotes) => this.writeNotes("./db.json", allNotes))
      .then(() => newNote);
  }
}

module.exports = Note, { readNotes, writeNotes };
