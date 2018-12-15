var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  address: String,
  latitude: String,
  longitude: String,
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: 'System' }
});

module.exports = mongoose.model('Location', LocationSchema);
