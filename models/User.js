const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  socket: {
    type: String,
    unique: true
  },
  room: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
