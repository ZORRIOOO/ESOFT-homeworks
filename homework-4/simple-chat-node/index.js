const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

user = [];
connections = [];

io.sockets.on('connection', (socket) => {
    console.log('Успешное подключение')
    connections.push(socket);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Отключение от чата')
    });

    socket.on('send message', (data) => {
        io.sockets.emit('add message', {msg: data.message, name: data.name});
    });

});