const io = require('./index').io;

module.exports = (socket) => {
    console.log('Socket id ' + socket.id);
}