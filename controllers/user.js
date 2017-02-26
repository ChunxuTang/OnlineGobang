/**
 * Created by Chunxu on 2017/2/25.
 */

const User = require('../models/User');

exports.createUserRoom = (socket, room) => {
  const user = new user({
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

