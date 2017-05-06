const Room = require('../models/Room');
const crypto = require('crypto');


exports.createRoom = (socket, callback) => {
  const room = new Room({
    roomId: crypto.randomBytes(4).toString("hex"),
    black: socket
  });

  console.log(room);

  room.save((err, obj) => {
    if (err) {
      console.log('room save err: ', err);
      callback(err);
    }
    console.log(obj);
    callback(null, obj.roomId);
  });
};

exports.addWhite = (socket, room) => {
  Room.findOneAndUpdate({
    roomId: room
  }, {
    $set: {white: socket}
  }, {
    new: true
  }, (err, obj) => {
    if (err) {
      console.log('find room err: ', err);
      return;
    }
    return obj;
  });
};

exports.removeRoom = (room) => {
  Room.remove({
    roomId: room
  }, (err) => {
    console.log('remove room err: ', err);
  });
};
