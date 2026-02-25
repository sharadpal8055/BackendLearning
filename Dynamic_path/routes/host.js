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
hostrouter.get("/edit-home/:homeId",homecontroller.geteditHomes)
hostrouter.post("/host-home-list",homecontroller.postedithomes)
hostrouter.post("/delete-home/:homeId",homecontroller.postDeleteHome)

exports.hostrouter = hostrouter;
