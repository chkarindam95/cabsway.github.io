import Booking from '../models/Booking';
import User from '../models/User';

const bookingController = {};

bookingController.list = function(req, res) {
  Booking.find({}).exec( function (err, bookings) {
    if (err) {
      console.error('Error:', err);
      res.send(err);
    }

    res.send(bookings);
  });
};

bookingController.show = function(req, res) {
  Booking
    .findById(req.params.id)
    .populate('user')
    .exec( function (err, bookings) {
      if (err) return res.send(err);
      res.send(bookings);
    });
};

bookingController.create = function(req, res) {
  const booking = new Booking(req.body);
  const user = User.findById(userId);

  booking.save(function(err, booking) {
    if (err) return res.json(err);
    res.send('Booking ' + booking + ' successfully created!');
  });
};

bookingController.delete = function(req, res) {
  Booking
    .findByIdAndDelete(req.params.id)
    .exec( function (err, bookings) {
      if (err) return res.send(err);
      res.send(bookings);
    });
};
// #TODO define what fields allowed to be updated
bookingController.update = function(req, res) {
  const options = {
    new: true,
    runValidators: true
  };

  Booking
    .findByIdAndUpdate(
      req.params.id,
      req.body,
      options,
      function (err, booking) {
        if (err) return res.send(err);
        res.send(booking);
      }
    );
};

module.exports = bookingController;