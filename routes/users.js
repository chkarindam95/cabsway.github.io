import express from 'express';
import user from '../controllers/UserController';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  user.list(req, res);
});

router.post('/', function(req, res) {
  user.create(req, res);
});

router.get('/:_id', function(req, res) {
  user.show(req, res);
});

router.delete('/:_id', function(req, res) {
  user.delete(req, res);
});

module.exports = router;
