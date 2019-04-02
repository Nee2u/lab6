var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  pw: {
    type: String,
 unique: true
  },
    
 nmb: {
    type: String,
    unique: true
  }
});



module.exports = mongoose.model('next', batchSchema);
