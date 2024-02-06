const express = require('express')
const router = express.Router({ mergeParams: true })
const incidentCtrl = require('../controllers/incident')

//ROUTES

//incident index
router.get("/", incidentCtrl.index) 

//create incident
router.post("/", incidentCtrl.create)

// show incident
router.get("/:incidentId", incidentCtrl.show)

// delete incident
router.delete("/:incidentId", incidentCtrl.delete)

// update incident
router.put("/:incidentId", incidentCtrl.update)


module.exports = router