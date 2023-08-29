
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  CO2: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

const MessageModel = mongoose.model('Data', messageSchema);

module.exports = MessageModel;
