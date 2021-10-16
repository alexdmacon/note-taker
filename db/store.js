const fs = require('fs');
const util = require('util');


// for creating randomized unique id numbers/sequences for each saved note
const { v4: uuidv4 } = require('uuid');

const readNotes = util.promisify(fs.readFile);



module.exports = { readNotes, }