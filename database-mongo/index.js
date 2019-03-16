var mongoose = require('mongoose');
const user = require('./schema.js')
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var User = mongoose.model('User', user)
var testUser = new User({
  username: 'Jon',
  health : 4
})

testUser.save((err)=> {
  if (err) {
    return;
  }

  console.log('saved')
})
// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };



// module.exports.selectAll = selectAll;