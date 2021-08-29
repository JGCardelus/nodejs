const http = require('http');

// Import local module
const routes = require('./routes');
// Now routes is the requestHandler function. So we can pass it
// as a callback to createServer
const server = http.createServer(routes);

server.listen(8000);