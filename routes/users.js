import express from 'express';
import user from '../controllers/UserController';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  user.list(req, res);
});

router.get('/create', function(req, res) {
  res.send('tet create');
  user.create(req, res);
});

router.get('/:id', function(req, res) {
  user.show(req, res);
});

module.exports = router;
