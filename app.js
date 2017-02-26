/**
 * Created by Chunxu on 2017/2/21.
 */
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');
const crypto = require('crypto');

const userController = require('./controllers/user');
const roomController = require('./controllers/room');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  //socket.emit('test message', 'hello');

  socket.on('action', (e, fn) => {
    console.log('action', e);

    if (e.type === 'server/ADD_PIECE') {
      socket.broadcast.emit('action', Object.assign(e, {
        type: 'ADD_PIECE'
      }));
    } else if (e.type === 'server/CREATE_ROOM') {
      let room = roomController.createRoom(socket);
      userController.createUserRoom(socket, room);
      socket.join(room);
      fn(room);
    } else if (e.type === 'server/JOIN_ROOM') {
      // There should be a room attribute in the event.
      roomController.addWhite(socket, e.room);
      socket.join(room);
    } else if (e.type === 'server/SIDE_WON') {

    }

  });

  socket.on('test message', (msg) => {
    console.log('test message', msg);
    io.emit('test message', msg);
  })
});

const id = crypto.randomBytes(4).toString("hex");
console.log(id);
console.log(crypto.randomBytes(4).toString("hex"));

server.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} `);
});

module.exports = app;
