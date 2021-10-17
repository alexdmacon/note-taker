const fs = require("fs");
const util = require("util");
const path = require("path");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(path.join(__dirname, file), "utf8", (err, data) => {
    console.log(`Writing ${file}`)
  }
  )


const readAndAppend = (content, file) => {
  console.log(`Here's the ${content}`)
  fs.readFile(path.join(__dirname, file), "utf8", (err, data) => {
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
