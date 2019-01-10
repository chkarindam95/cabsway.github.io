const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
  user: { type : Schema.ObjectId, ref : 'User' },
  drivers: [{
    driver: { type : Schema.ObjectId, ref : 'Driver' }
  }],
  uui: Number,
  message: String,
  passengers: {
    adults: { 
      type: Number,
      required: true
    },
    children: Number,
    infants: Number
  },
  oneWay: {
    type: Boolean,
    default: true
  },
  departure: {
    type: String,
    required: true
  },
  arrival: {
    type: String,
    required: true
  },
  // #TODO required: if the departure or arrival is the airport
  flightNo: String,  
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

module.exports = mongoose.model('Booking', BookingSchema);
