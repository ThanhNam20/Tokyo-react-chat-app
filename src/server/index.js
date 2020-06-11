
const express = require("express");
const app = express();
const server = require('http').Server(app)
const io = module.exports.io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;
const socketManager = require('./SocketManager');

app.use(express.static(__dirname+ '/../../build'))

io.on('connection', socketManager);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})