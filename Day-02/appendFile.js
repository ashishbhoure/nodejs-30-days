var fs = require("fs");

new_data = "\nThis data will be appended at the end of the file.";

fs.appendFile("index.txt", new_data, (err) => {
  if (err) throw err;
  console.log("The new_content was appended successfully");
});
