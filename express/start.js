var express = require('express');
var server = express();
server.use('/app',express.static('dist/app'))
server.use(express.static('src/html'))
server.listen(3000,"localhost", function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log("started")
})
