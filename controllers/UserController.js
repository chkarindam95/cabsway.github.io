import User from '../models/User';

var userController = {};

userController.list = function(req, res) {
  User.find({}).exec(function (err, users) {
    if (err) {
      console.error('Error:', err);
    }
    else {
      res.send(users);
    }
  });
};

userController.create = function(req, res) {
  var user = new User(req.body);
  user.save();

};

module.exports = userController;
