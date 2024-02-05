const express = require('express')
const router = express.Router()

const rideCtrl = require('../controllers/ride')

//ROUTES

//ride index
router.get("/", rideCtrl.index) 

//create ride
router.post("/", rideCtrl.create)

// show ride
router.get("/:id", rideCtrl.show)

// delete ride
router.delete("/:id", rideCtrl.delete)

// update ride
router.put("/:id", rideCtrl.update)


module.exports = router