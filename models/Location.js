const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  address: {
    type: String,
    unique: true,
    required: true
  },
  latitude: String,
  longitude: String,
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: 'System' }
});

module.exports = mongoose.model('Location', LocationSchema);
