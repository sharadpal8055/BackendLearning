const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const homecontroller=require('../controllers/homes');
const { title } = require('process');
const router = express.Router();

router.get('/', (req, res,next) => {
  // console.log('homes in user page',homes)
  // console.log("user route hit", req.url, req.method);

  // res.sendFile(
  //   path.join(rootDir, 'views', 'user.html')
  // );
  res.render('user',{homes:homecontroller.homes,title:'available homes'})
});

module.exports = router;
