// create a server

var http = require("http");

var host = "127.0.0.1";
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  //   console.log("Server Working");
  //   response.end("Server Working Success");

  //   response.write()

  response.write("Hello Node js ! \n");
  response.write("I am Ashish Bhoure !");
  response.end();
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error Occured : ", error);
  }

  console.log("server is listening on " + host + ":" + port);
});
