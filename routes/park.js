const express = require('express')
const router = express.Router()
const parkCtrl = require('../controllers/park')

//ROUTES

//park index
router.get("/", parkCtrl.index) 

//create park
router.post("/", parkCtrl.create)

// show park
router.get("/:id", parkCtrl.show)

// delete park
router.delete("/:id", parkCtrl.delete)

// update park
router.put("/:id", parkCtrl.update)


module.exports = router