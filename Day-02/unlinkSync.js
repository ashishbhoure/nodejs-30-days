var fs = require("fs");
var filename = "index.txt";
fs.unlinkSync(filename);
console.log("File Deleted Successfully");
