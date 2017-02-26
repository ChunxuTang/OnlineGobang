/**
 * Created by Chunxu on 2017/2/21.
 */

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
