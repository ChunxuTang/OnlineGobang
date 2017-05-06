const User = require('../models/User');

exports.createUserRoom = (socket, room) => {
  const user = new User({
    socket,
    room
  });

  user.save((err, obj) => {
    if (err) {
      console.log('user save err: ', err);
      return;
    }
    console.log(obj);
  });
};

exports.getUserRoom = (socket, callback) => {
  User.findOne({
    socket
  }, (err, obj) => {
    if (err) {
      console.log('user get room err: ', err);
      callback(err);
    }
    // return obj.room;
    callback(null, obj);
  });
};

exports.removeUserRoom = (socket) => {
  User.remove({
    socket: socket
  }, (err) => {
    console.log('remove user err: ', err);
  });
};
