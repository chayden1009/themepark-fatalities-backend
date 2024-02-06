const express = require('express')
const router = express.Router({ mergeParams: true })
const rideCtrl = require('../controllers/ride')

//ROUTES

//ride index
router.get("/", rideCtrl.index) 

//create ride
router.post("/", rideCtrl.create)

// show ride
router.get("/:rideId", rideCtrl.show)

// delete ride
router.delete("/:rideId", rideCtrl.delete)

// update ride
router.put("/:rideId", rideCtrl.update)


module.exports = router