///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const { rideTypes } = require('../config/constants')
///////////////////////////////
// MODELS
////////////////////////////////
const RideSchema = new Schema({
  name: {String, required: true},
  type: {String, enum: rideTypes.map(rideType => rideType)},
  incidents: [IncidentSchema],
},{timestamps: true});

module.exports = mongoose.model("Ride", RideSchema);