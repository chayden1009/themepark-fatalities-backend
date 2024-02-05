///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const ParkSchema = new Schema({
  name: {String, required: true},
  address: String,
  rides: [RideSchema],
},{timestamps: true});

module.exports = mongoose.model("Park", ParkSchema);