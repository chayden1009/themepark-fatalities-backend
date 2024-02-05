const express = require('express')
const router = express.Router()

//ROUTES

router.get("/", async (req, res) => {
	res.status(200).json({message: "park index route"})
});


router.post("/", async (req, res) =>  {
	res.status(201).json({message: "park create route"})
});


module.exports = router