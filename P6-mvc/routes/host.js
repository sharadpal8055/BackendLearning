const path = require("path");
const express = require("express");

const hostrouter = express.Router();
const homecontroller=require('../controllers/homes')

/* GET add-home */
hostrouter.get("/add-home",homecontroller.gethomes );

/* POST submit-home */
hostrouter.post(
  "/submit-home", 
  homecontroller.posthomes
  
);

exports.hostrouter = hostrouter;
