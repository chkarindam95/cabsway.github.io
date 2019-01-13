import express from 'express';
import user from '../controllers/UserController';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  user.list(req, res);
});

/** Update a specific user
 * @params id User id
*/
router.post('/', function(req, res) {
  user.create(req, res);
});

/** Get a specific user
 * @params id User id
*/
router.get('/:id', function(req, res) {
  user.show(req, res);
});

/** Delete a specific user
 * @params id User id
*/
router.delete('/:id', function(req, res) {
  user.delete(req, res);
});

/** Update a specific user
 * @params id User id
*/
router.put('/:id', function(req, res) {
  user.update(req, res);
});

/** Get all bookings for a specific user
 * 
*/
router.get('/:id/bookings', function(req, res) {
  user.bookings(req, res);
});

module.exports = router;
