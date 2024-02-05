const express = require('express')
const router = express.Router()
const parkCtrl = require('../controllers/park')

//ROUTES

//park index
router.get("/parks", parkCtrl.index) 

//create park
router.post("/parks", parkCtrl.create)

// show park
router.get("/parks/:id", parkCtrl.show)

// delete park
router.delete("/parks/:id", parkCtrl.delete)

// update park
router.put("/parks/:id", parkCtrl.update)


module.exports = router