///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const RideSchema = require('./Ride')
///////////////////////////////
// MODELS
////////////////////////////////
const ParkSchema = new Schema({
  name: {type: String, required: true},
  address: String,
  rides: [RideSchema],
},{timestamps: true});

module.exports = mongoose.model("Park", ParkSchema);