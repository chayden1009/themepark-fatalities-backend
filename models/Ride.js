///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const { rideTypes } = require('../config/constants')
const IncidentSchema = require('./Incident')
///////////////////////////////
// MODELS
////////////////////////////////
const RideSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, enum: rideTypes.map(rideType => rideType)},
  incidents: [IncidentSchema],
},{timestamps: true});

module.exports = mongoose.model("Ride", RideSchema);