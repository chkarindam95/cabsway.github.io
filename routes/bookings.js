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
 * 
 */
router.post('/',  function(req, res) {
  booking.create(req, res);
});

/** Get an existing booking
 *  @oarams id number
 */
router.get('/:id',  function(req, res) {
  booking.show(req, res);
});

/** Delete an existing booking
 *  @oarams id number
 */
router.delete('/:id',  function(req, res) {
  booking.delete(req, res);
});

/** Update an existing booking
 *  @oarams id number
 */

router.put('/:id',  function(req, res) {
  booking.update(req, res);
});

module.exports = router;