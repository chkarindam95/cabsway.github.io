import User from '../models/User';

const userController = {};

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
  const user = new User(req.body);
  user.save();

};

module.exports = userController;
