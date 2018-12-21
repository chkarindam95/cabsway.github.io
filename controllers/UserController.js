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

userController.show = function(req, res) {
  const userId = req.params._id;

  if (typeof userId === 'undefined') {
    return 'throw an error, id is undegined';
  }

  User.
    find(
      {
        _id: userId
      }
    )
    .exec(function (err, user) {
      if (err) return res.json(err);
      res.send(user);
    });
};

userController.create = function(req, res) {
  const user = new User(req.body);

  user.save(function(err, user) {
    if (err) return res.json(err);
    res.send('User ' + user.firstName + ' successfully created!');
  });
};

module.exports = userController;
