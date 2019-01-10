import express from 'express';
import booking from '../controllers/BookingController';

const router = express.Router();

/** Get all booking
 * 
 */
router.get('/', function(req, res) {
  booking.list(req, res);
});

/** Create a new booking
 *  @oarams: 
 */
router.post('/',  function(req, res) {
  booking.create(req, res);
});

module.exports = router;