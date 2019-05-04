const http = require('http'); // Using http package to create server.
const port = 3000; // The port on which the project should work.
const app = require('./app');
const server = http.createServer(app); // Turns the computer into http server and it consists of requestlistener method which will specify which function to execute when a request is made to the server.
server.listen(port);