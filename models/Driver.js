var mongoose = require('mongoose');

var DriverSchema = new mongoose.Schema({
  uui: Number,
  firstName: String,
  lastName: String,
  email: String,
  carModel: String,
  carSeats: Number,
  age: Number,
  encryptedPassword: String,
  resetPasswordToken: String,
  resetPasswordSentAt: String,
  phone: Number,
  countryCode: Number,
  confirmationToken: String,
  confirmedAt: { type: Date },
  confirmationSentAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  lastSignInAt: { type: Date },
});

module.exports = mongoose.model('Driver', DriverSchema);