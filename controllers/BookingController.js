import Booking from '../models/Booking';

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

bookingController.create = function(req, res) {
  const booking = new Booking(req.body);

  booking.save(function(err, booking) {
    if (err) return res.json(err);
    res.send('Booking ' + booking + ' successfully created!');
  });
};

module.exports = bookingController;