const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const homecontroller=require('../controllers/homes');
const { title } = require('process');
const router = express.Router();

router.get('/', homecontroller.getUserHomes);


module.exports = router;
