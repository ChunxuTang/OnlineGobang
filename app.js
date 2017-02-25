/**
 * Created by Chunxu on 2017/2/21.
 */
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  //socket.emit('test message', 'hello');

  socket.on('action', (e) => {
    console.log('action', e);

    socket.broadcast.emit('action', Object.assign(e, {
      type: 'ADD_PIECE'
    }));
  });

  socket.on('test message', (msg) => {
    console.log('test message', msg);
    io.emit('test message', msg);
  })
});

server.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} `);
});

module.exports = app;
