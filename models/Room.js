/**
 * Created by Chunxu on 2017/2/21.
 */

const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  id: {
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

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
