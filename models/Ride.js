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
  name: {type: String, required: true},
  type: {type: String, enum: rideTypes.map(rideType => rideType)},
  incidents: [{ type: Schema.Types.ObjectId, ref: 'Incident' }],
},{timestamps: true});

module.exports = mongoose.model("Ride", RideSchema);