import express from 'express';
import location from '../controllers/LocationController';

const router = express.Router();

/**
 * Get all locations that are available
 */
router.get('/', function(req, res) {
  location.list(req, res);
});

/**
 * Create a new location
 * @params String address name
 */
router.post('/', function(req, res) {
  /**
   *  #TODO latitude and longitude
   *  should be send
   *  OPTION integrate with a map and send it in the form
  **/
  location.create(req, res);
});

/**
 * Update an existing location
 * @params Number id location id
 */
router.put('/:_id', function(req, res) {
  location.update(req, res);
});

/**
 * Delete an existing location
 * @params Number id location id
 */
router.delete('/:_id', function(req, res) {
  location.delete(req, res);
});

module.exports = router;
