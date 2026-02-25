const express = require('express');

const router = express.Router();

// GET /store/bookings
router.get('/bookings', (req, res) => {
  res.render('store/bookings', { title: 'My Bookings' });
});

// GET /store/favourites
router.get('/favourites', (req, res) => {
  res.render('store/favourite-list', { title: 'Favourites' });
});

module.exports = router;
