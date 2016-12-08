// intro point for our server.
// PRO-TIP: if you have an index.js file
// on the root of a folder in node
// you can just require that folder and node will
// automatically require the index.js on the root

// setup config first before anything by requiring it
var port         = process.env.PORT || 8080; 
var app = require('./server/server');

//logger is the wrapper around console.log that adds color
// You can conditionally turn it off
var logger = require('./server/util/logger');

app.listen(port);
logger.log('listening on ' + port);


