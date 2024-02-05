const express = require('express')
const router = express.Router()

const incidentCtrl = require('../controllers/incident')

//ROUTES

//incident index
router.get("/", incidentCtrl.index) 

//create incident
router.post("/", incidentCtrl.create)

// show incident
router.get("/:id", incidentCtrl.show)

// delete incident
router.delete("/:id", incidentCtrl.delete)

// update incident
router.put("/:id", incidentCtrl.update)


module.exports = router