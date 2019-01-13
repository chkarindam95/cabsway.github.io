import express from 'express';
import price from '../controllers/PriceController';

const router = express.Router();

router.get('/', function(req, res) {
  price.list(req, res);
});

router.post('/', function(req, res) {
  price.create(req, res);
});

router.get('/:id', function(req, res) {
  price.show(req, res);
});

router.delete('/:id', function(req, res) {
  price.delete(req, res);
});

router.put('/:id', function(req, res) {
  price.update(req, res);
});


module.exports = router;