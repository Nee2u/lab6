var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  nname: {
    type: String,
     unique:true
    
  },
  id: {
    type: String,
unique: true
  },
batch: {
    type: String,
unique: true
},
dept: {
    type: String
}
    
});



module.exports = mongoose.model('index', batchSchema);
