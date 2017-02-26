/**
 * Created by Chunxu on 2017/2/25.
 */

const Room = require('../models/Room');
const crypto = require('crypto');


exports.createRoom = (socket) => {
  const room = new Room({
    roomId: crypto.randomBytes(4).toString("hex"),
    black: socket
  });

  room.save((err, obj) => {
    if (err) {
      console.log('room save err: ', err);
      return;
    }
    console.log(obj);
    return obj.roomId;
  });
};

exports.addWhite = (socket, room) => {
  Room.findOneAndUpdate({
    roomId: room
  }, {
    $set: { white: socket }
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
