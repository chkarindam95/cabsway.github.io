const mongoose = require('mongoose');
import pointSchema from './shared/point';

const LocationSchema = new mongoose.Schema({
  address: {
    type: String,
    unique: true,
    required: true
  },
  location: {
    type: pointSchema,
    required: true
  },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: 'System' }
});

module.exports = mongoose.model('Location', LocationSchema);
