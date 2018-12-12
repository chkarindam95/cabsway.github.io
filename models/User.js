var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uui: Number,
  first_name: String,
  last_name: String,
  email: String,
  encrypted_password: String,
  reset_password_token: String,
  reset_password_sent_at: String,
  phone: Number,
  country_code: Number,
  confirmation_token: String,
  confirmed_at: { type: Date },
  confirmation_sent_at: { type: Date },
  created_at: { type: Date },
  updated_at: { type: Date, default: Date.now },
  last_sign_in_at: { type: Date },
});

module.exports = mongoose.model('User', UserSchema);