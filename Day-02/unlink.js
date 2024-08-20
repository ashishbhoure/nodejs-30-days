var fs = require("fs");
var filename = "index.txt";
fs.unlink(filename, (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});

