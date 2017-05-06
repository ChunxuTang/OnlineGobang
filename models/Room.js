const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  black: {
    type: String
  },
  white: {
    type: String
  }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
