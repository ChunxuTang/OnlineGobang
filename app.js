/**
 * Created by Chunxu on 2017/2/21.
 */
require('./config/config');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');

const userController = require('./controllers/user');
const roomController = require('./controllers/room');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});


app.set('port', process.env.PORT || 10000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  socket.on('action', (e) => {
    console.log('action', e);

    if (e.type === 'server/ADD_PIECE') {
      userController.getUserRoom(socket.id, (err, obj) => {
        if (err) return;
        if (obj) {
          socket.broadcast.to(obj.room).emit('action', Object.assign({}, e, {
            type: 'ADD_PIECE'
          }));
        }
      });
    } else if (e.type === 'server/CREATE_ROOM') {
      roomController.createRoom(socket.id, (err, room) => {
        if (err) return;
        userController.createUserRoom(socket.id, room);
        socket.join(room);
        socket.emit('action', {
          type: 'CREATE_ROOM',
          room
        });
      });

    } else if (e.type === 'server/JOIN_ROOM') {
      // There should be a room attribute in the event.
      roomController.addWhite(socket.id, e.room);
      userController.createUserRoom(socket.id, e.room);
      socket.join(e.room);
    } else {
      console.log('unknown type!');
    }

  });

  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected');
    userController.getUserRoom(socket.id, (err, obj) => {
      if (err) return;
      if (obj) {
        roomController.removeRoom(obj.room);
        userController.removeUserRoom(socket.id);
      }
    });
  });

});

server.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} `);
});

module.exports = app;


//http://stackoverflow.com/questions/10058226/send-response-to-all-clients-except-sender-socket-io

/*
 // sending to sender-client only
 socket.emit('message', "this is a test");

 // sending to all clients, include sender
 io.emit('message', "this is a test");

 // sending to all clients except sender
 socket.broadcast.emit('message', "this is a test");

 // sending to all clients in 'game' room(channel) except sender
 socket.broadcast.to('game').emit('message', 'nice game');

 // sending to all clients in 'game' room(channel), include sender
 io.in('game').emit('message', 'cool game');

 // sending to sender client, only if they are in 'game' room(channel)
 socket.to('game').emit('message', 'enjoy the game');

 // sending to all clients in namespace 'myNamespace', include sender
 io.of('myNamespace').emit('message', 'gg');

 // sending to individual socketid
 socket.broadcast.to(socketid).emit('message', 'for your eyes only');
 */