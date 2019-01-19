const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  admin: { 
    type: Boolean, 
    default: false 
  },
  firstName: {
    type: String,
    required: 'First name is required',
  },
  lastName: {
    type: String,
    required: 'Last name is required',
  },
  email: {
    type: String,
    lowercase: true,
    index: true,
    required: 'Email address is required'
  },
  phone: {
    type: Number,
    required: 'Phone is required',
  },
  countryCode: {
    type: Number,
    required: 'Country code is required',
  },
  encryptedPassword: String,
  resetPasswordToken: String,
  resetPasswordSentAt: String,
  confirmationToken: String,
  confirmedAt: { type: Date },
  confirmationSentAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  lastSignInAt: { type: Date },
});


module.exports = mongoose.model('User', UserSchema);