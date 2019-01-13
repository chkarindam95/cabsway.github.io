const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
  user: { type : Schema.Types.ObjectId, ref : 'User' },
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
  flightNo: {
    type: String,
    required: function() {
      return this.departure == 'Thessaloniki Airport';
    }
  }, 
  // #NOTE validation
  // departure cannot be earlier than now 
  departureTimestamp: { 
    type: Date,
    required: true 
  },
  arrivalTimestamp: { type: Date },
  returnTimestamp: { 
    type: Date,
    validate: {
      validator: function(currentValue){
        return  currentValue > this.departureTimestamp;
      },
      message: 'return date cannot be earlier than the departing date'
    },
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
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Booking', BookingSchema);
