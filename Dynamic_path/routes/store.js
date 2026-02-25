const express = require('express');
const router = express.Router();
const storecontroller = require('../controllers/store/store');

router.get('/bookings', (req, res) => {
  res.render('store/bookings', { title: 'My Bookings' });
});

router.get('/homes/:homeId', storecontroller.gethomedetails);

router.get('/favourites', storecontroller.getFavourites);

router.post('/favourites', storecontroller.postFavourites);
router.post('/favourites/delete/:homeId',storecontroller.deletefav)
module.exports = router;