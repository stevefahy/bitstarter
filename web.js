var fs = require('fs');

fs.readFile('./index.html',function(err,data){
  console.log(data.toString()); //replace console.log with the code to write to the response.
});