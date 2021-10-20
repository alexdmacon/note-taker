// importing npm modules I'll need
const fs = require("fs");
const util = require("util");
const path = require("path");

// these are all helper functions that go with with Express routing in api.js and html.js. these will actually manipulate the content in db.json database file.
const readFromFile = util.promisify(fs.readFile);

// add content to file. I don't know that I'll actually use this one.
const writeToFile = (destination, content) =>
  fs.writeFile(
    (path.join(__dirname, '../db/db.json')), JSON.stringify(content), (err) => console.log(err)
  );

  // adds data to db.json file.
const readAndAppend = (content, file) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
      return parsedData;
    }
  });
};

// exports these functions so we can use them in other scripts.
module.exports = { readFromFile, writeToFile, readAndAppend };
