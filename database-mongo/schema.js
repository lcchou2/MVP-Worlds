const mongoose = require('mongoose');


var user = new mongoose.Schema({
  username: String,
  health: Number
})

module.exports = user