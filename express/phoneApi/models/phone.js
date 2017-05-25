var mongoose = require('mongoose');

var phoneShema = new mongoose.Schema({
  brand: { type: String },
  name: { type: String },
  images: {type: String},
  specs: { type: Array, default: []}
})

var Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
