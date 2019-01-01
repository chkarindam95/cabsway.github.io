const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
  user: { type : Schema.ObjectId, ref : 'User' },
  drivers: [{
    driver: { type : Schema.ObjectId, ref : 'Driver' }
  }],
  uui: Number,
  message: String,
  flightNo: String,
  passengers: {
    adults: Number,
    children: Number,
    infants: Number
  },
  oneWay: {
    type: Boolean,
    default: true
  },
  departure: String,
  arrival: String,
  departureTimestamp: { type: Date },
  arrivalTimestamp: { type: Date },
  returnTimestamp: { 
    type: Date,
    required: function() {
      return !this.oneWay;
    }
  },
  duration: Number,
  distance: Number,
  confirmationToken: String,
  confirmedAt: { type: Date },
  confirmationSentAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
