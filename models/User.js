var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uui: Number,
  admin: { type: Boolean, default: false },
  firstName: String,
  lastName: String,
  email: String,
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

module.exports = mongoose.model('User', UserSchema);