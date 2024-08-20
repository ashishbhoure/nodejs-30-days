var fs = require("fs");

var filename = "index.txt";

var content = fs.readFileSync(filename);

console.log("Content : " + content);
