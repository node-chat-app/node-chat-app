const express = require ('express');
const http = require ('http');
const socketIO = require ('socket.io');
const path = require('path');

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
});

const port = process.env.PORT || 1000;

server.listen(port, () => {
console.log(`Server started on port ${port}`);
});