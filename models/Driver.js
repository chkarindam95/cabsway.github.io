const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  uui: Number,
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
    required: 'Email address is required',
    unique: true
  },
  phone: {
    type: Number,
    required: 'Phone is required',
  },
  countryCode: {
    type: Number,
    required: 'Country code is required',
  },
  age: Number,
  carModel: {
    type: String,
    required: 'Car model is required',
  },
  carSeats: { 
    type: Number,
    reqired: 'Car seats number is required'
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

module.exports = mongoose.model('Driver', DriverSchema);