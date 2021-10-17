const fs = require("fs");
const util = require("util");
const path = require("path");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(
    (path.join(__dirname, '../db/db.json')), JSON.stringify(content), (err) => console.log(err)
  );

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

module.exports = { readFromFile, writeToFile, readAndAppend };
