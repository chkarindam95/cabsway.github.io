const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new mongoose.Schema({
  departure: { 
    type : Schema.Types.ObjectId,
    ref : 'Location',
    required: true
  },
  arrival: { 
    type : Schema.Types.ObjectId, 
    ref : 'Location',
    required: true
  },
  price: {
    oneWay: {
      type: Number,
      required: true
    },
    return: {
      type: Number
    }
  }
});  
mongoose.set('debug', true);

module.exports = mongoose.model('Price', PriceSchema);
