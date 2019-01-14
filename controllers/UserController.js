import User from '../models/User';
import Booking from '../models/Booking';
const bcrypt =  require('bcryptjs');

const userController = {};

userController.list = function(req, res) {
  User.find({}).exec(
    function (err, users) {
      if (err) return res.send(err);
      res.send(users);
    });
};

userController.show = function(req, res) {
  const userId = req.params.id;

  if (typeof userId === 'undefined') {
    return 'throw an error, id is undefined';
  }

  User.findById(
    userId, 
    function (err, user) {
      if (err) return res.json(err);
      res.send(user); 
    });
};

userController.create = function(req, res) {

  User
    .findOne(
      { 
        email: req.body.email
      }
    )
    .then(user => {
      if (user) return res.json('{message: Already exists}');
      
      bcrypt
        .hash(req.body.password, 12)
        .then(hash => {
          req.body.encryptedPassword = hash;
          const user = new User(req.body);
          user.save(function(err, user) {
            if (err) return res.json(err);
            res.send(`User ${user.firstName} successfully created!`);
          });
        });
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    });
};

userController.delete = function(req, res) {
  const userId = req.params.id;

  User.findByIdAndDelete(
    userId, 
    function(err, user) {
      if (err) return res.json(err);
      res.json(user);
    });
};

userController.update = function(req, res) {
  const options = {
    new: true,
    runValidators: true
  };

  // sanitize req.query
  User.findByIdAndUpdate(
    req.params.id, 
    req.query, 
    options, 
    function(err, user) {
      if (err) return res.json(err);
      res.json(user);
    });
};

userController.bookings = function(req, res) {
  Booking
    .find({user: req.params.id})
    .exec(
      function (err, bookings) {
        if (err)  res.send(err);
        res.send(bookings);
      }
    );
};

module.exports = userController;
