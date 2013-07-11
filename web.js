var express = require('express');
//var fs = require('fs');

//var app = express.createServer(express.logger());


fs = require('fs');
fs.readFile('/doesnt/exist', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

/*
var content;
// First I want to read the file
fs.readFile('Index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content);
}
*/
/*
fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});
*/

/*
app.get('/', function(request, response) {
  response.send('Hello  2!');
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});