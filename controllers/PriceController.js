import Price from '../models/Price';

const priceController = {};

priceController.list = function(req, res) {
  Price.find({}).exec( function (err, prices) {
    if (err) {
      console.error('Error:', err);
      res.send(err);
    }

    res.send(prices);
  });
};

priceController.create = function(req, res) {
  const price = new Price(req.body);

  price.save(function(err, price) {
    if (err) return res.send(err);
    res.send(price);
  });

};

priceController.show = function(req, res) {
  Price
    .findById(req.params.id)
    .populate('arrival')
    .populate('departure')
    .exec( function (err, price) {
      if (err) return res.send(err);
      res.send(price);
    });
};

priceController.delete = function(req, res) {
  Price
    .findByIdAndDelete(req.params.id)
    .exec( function (err, price) {
      if (err) return res.send(err);
      res.send(price);
    });
};

priceController.update = function(req, res) {
  const options = {
    new: true,
    runValidators: true
  };

  Price
    .findByIdAndUpdate(
      req.params.id,
      req.body,
      options,
      function (err, price) {
        if (err) return res.send(err);
        res.send(price);
      }
    );
};

module.exports = priceController;