///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const ParkSchema = new Schema({
  name: {type: String, required: true},
  address: String,
  backgroundImage: String,
  rides: [{ type: Schema.Types.ObjectId, ref: 'Ride' }],
},{timestamps: true});

module.exports = mongoose.model("Park", ParkSchema);