var fs = require('fs');
var content = "We are Appending this file synchronously using node.js";
fs.appendFileSync('index.txt', content);
console.log("File Appended Successfully");