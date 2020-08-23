var http = require('http');
var fs = require('fs');

console.log('test in the container');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello,Welcome to Docker World!'); //write a response to the client
  fs.writeFile('sample.txt', "sample text is here", () => {
    console.log('file created and updated.');
  });
  console.log('test console log in host');
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8081

console.log('this is listening on anthor port.');