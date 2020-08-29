const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var task = new Schema({
    name: {
      type: String
    },
    date: {
      type: String
    },
    desc: {
      type: String
    },
    importance: {
      type: String
    }
  });

module.exports = mongoose.model('task', task);